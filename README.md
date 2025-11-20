
## Overview

This repository contains a modern web-dashboard built with React, TypeScript and Vite. It displays Warranty status and Site Health information gotten from a mock api, and has automated end-to-end tests using Playwright. 

## Tech Stack

- **React 19** 
- **Tailwind CSS 4**
- **Vite 7**
- **Playwright**
- **Docker + Docker Compose**


## Usage

### Running the Dashboard

Start the dashboard application:

```bash
docker compose up --build  
```

The dashboard will be available at `http://localhost:5173`

### Running Tests

```bash
docker compose run --rm e2e
```
