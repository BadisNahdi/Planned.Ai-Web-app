# Stage 1: Build the application
FROM node:lts-alpine AS build

# Set working directory to project root
WORKDIR /usr/src/app

# Copy all files to the working directory
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Stage 2: Serve the application with NGINX
FROM nginx:alpine

# Remove the default NGINX static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built application to NGINX HTML folder
COPY --from=build /usr/src/app/dist/front-pfa/ /usr/share/nginx/html

# Copy favicon.ico to NGINX HTML folder
COPY --from=build /usr/src/app/src/favicon.ico /usr/share/nginx/html/favicon.ico

# Expose port 80 (assuming NGINX serves on port 80)
EXPOSE 80

# Start NGINX in the foreground (adjust as needed)
CMD ["nginx", "-g", "daemon off;"]
