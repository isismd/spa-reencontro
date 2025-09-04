# ---- Build (Node) ----
FROM node:20-alpine AS build

WORKDIR /app

# Copia apenas os manifestos primeiro (cache melhor)
COPY package*.json ./
RUN npm ci

# Copia o restante
COPY . .

# Recebe as variáveis de ambiente para o Vite na hora do build
ARG VITE_API_BASE_URL
ARG VITE_USE_MOCK
ARG VITE_RECAPTCHA_SITE_KEY
ARG VITE_RECAPTCHA_ENABLED

# Expõe como ENV durante o build
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
ENV VITE_USE_MOCK=${VITE_USE_MOCK}
ENV VITE_RECAPTCHA_SITE_KEY=${VITE_RECAPTCHA_SITE_KEY}
ENV VITE_RECAPTCHA_ENABLED=${VITE_RECAPTCHA_ENABLED}

# Build de produção
RUN npm run build

# ---- Runtime (Nginx) ----
FROM nginx:alpine

# Config SPA: redireciona rotas para index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o bundle gerado
COPY --from=build /app/dist /usr/share/nginx/html

# Porta padrão do Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
