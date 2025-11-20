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

# Copy package files 
COPY package*.json ./


RUN npm ci

# Install Playwright browsers
RUN npx playwright install --with-deps

#opy the source code
COPY . .

# Make playwright available globally 
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

CMD ["npm", "run", "test:e2e"]


