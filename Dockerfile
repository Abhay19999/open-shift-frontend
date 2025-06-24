# Stage 1: Build the frontend
FROM node:20-alpine AS builder

WORKDIR /app
COPY .. .

RUN npm install
RUN npm run build

# Stage 2: Serve the static files using http-server
FROM node:20-alpine

# Install a lightweight static file server
RUN npm install -g http-server

WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app/dist .

EXPOSE 8080

# Start the server
CMD ["http-server", ".", "-p", "8080"]
