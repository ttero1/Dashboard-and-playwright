
## Overview

This repository contains a modern web-dashboard built with React, TypeScript and Vite. It uses a mock api to display Warranty status and Site Health monitoring features, and has automated end-to-end tests using Playwright. 

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
docker compose build up
```

The dashboard will be available at `http://localhost:5173`

### Running Tests

```bash
docker compose run e2e
```
