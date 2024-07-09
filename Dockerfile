FROM node:20-alpine as base

WORKDIR /app

COPY ./ ./
COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

RUN npm install -g nodemon

FROM nginx:latest
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
