# ---- Build (Node) ----
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Recebe as variáveis de ambiente para o Vite na hora do build
ARG VITE_API_BASE_URL
ARG VITE_RECAPTCHA_SITE_KEY
ARG VITE_RECAPTCHA_ENABLED

ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
ENV VITE_RECAPTCHA_SITE_KEY=${VITE_RECAPTCHA_SITE_KEY}
ENV VITE_RECAPTCHA_ENABLED=${VITE_RECAPTCHA_ENABLED}

RUN npm run build

# ---- Runtime (Nginx) ----
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
