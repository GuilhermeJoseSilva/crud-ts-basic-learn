# Dockerfile

FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# NÃO USE CMD AQUI se você já usa `command:` no docker-compose
# Deixe o Docker Compose cuidar disso
