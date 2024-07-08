FROM node:20-alpine as base

WORKDIR /app

COPY ./ ./
COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

RUN npm install -g nodemon

EXPOSE 3001