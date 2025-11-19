# ---------- Development Stage ----------
FROM node:20-alpine AS dev

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173
ENV CHOKIDAR_USEPOLLING=true

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


# ---------- Build Stage (optional for production) ----------
FROM dev AS build

RUN npm run build


# ---------- Playwright E2E Testing Stage ----------
FROM mcr.microsoft.com/playwright:v1.56.1-noble AS e2e

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install dependencies again because the base OS is different (not Alpine)
RUN npm ci

# Install Playwright browsers (required!)
RUN npx playwright install --with-deps

# Now copy the source code
COPY . .

# Make playwright available globally (fixes PATH issues)
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

CMD ["npm", "run", "test:e2e"]


