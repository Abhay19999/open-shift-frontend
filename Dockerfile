# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Stage 2: Serve with http-server
FROM node:20-alpine

RUN npm install -g http-server

WORKDIR /app
COPY --from=builder /app/dist .

EXPOSE 8080
CMD ["http-server", ".", "-p", "8080"]
