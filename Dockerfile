# Bassisimage
FROM node:alpine as build-stage

# Working Directory
WORKDIR /app

# Install Dependencies
COPY package*.json .
RUN npm ci

# Copy Source Code
COPY . .

# Build Step
RUN npm run build

# Stage 2: Nginx to run App
FROM nginx:alpine as production-stage

# Nginx configuration
COPY --from=build-stage /app/dist /usr/share/nginx/html/

# Port
EXPOSE 80

# Starting App
CMD [ "nginx", "-g", "daemon off;" ]
