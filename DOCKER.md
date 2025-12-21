# Docker usage

Quick commands to build and run the app in this repository.

Development (use the dev container with live reload):

```bash
# build and start dev container with compose
docker-compose up --build web

# or run directly
docker build -f Dockerfile.dev -t farmer-dev .
docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules farmer-dev
```

Production (build static assets and serve via nginx):

```bash
# build production image
docker build -t farmer-app .

# run production container
docker run -p 80:80 farmer-app

# or with compose
docker-compose up --build web-prod
```

Notes:
- These commands assume `npm run build` produces a `dist` folder (Vite default).
- If your project uses `pnpm` or `yarn`, adjust the Dockerfiles and commands accordingly.
