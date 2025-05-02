# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Only copy lock and manifest to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including dev)
RUN pnpm install

# Copy source files
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Create minimal image for running the app
FROM node:20.8.1-alpine

WORKDIR /app

RUN npm install -g pnpm

# Only copy required files from BUILDER
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

# Expose port
EXPOSE 4000

# Only install prod dependencies if needed (optional if already done)
# RUN pnpm install --prod

CMD ["pnpm", "start"]
