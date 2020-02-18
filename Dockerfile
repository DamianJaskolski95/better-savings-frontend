FROM node:13.8.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install --silent
RUN npm install @vue/cli@3.11.0

COPY . ./

MAINTAINER damian.jaskolski95@gmail.com

ENTRYPOINT ["./entrypoints/docker-entrypoint.sh"]

