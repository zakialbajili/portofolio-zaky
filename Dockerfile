# Stage 1: Builder
FROM node:22-alpine AS base

FROM base as builder

WORKDIR /app
COPY package*.json package-lock.json ./

RUN npm ci

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY postcss.config.js .
COPY tailwind.config.js .

RUN npm run build

# Stage 2: Production
FROM base as runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV NODE_ENV=production

CMD ["node", "server.js"]
