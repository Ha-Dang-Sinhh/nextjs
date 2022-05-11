FROM node:lts-alpine as build-stage
WORKDIR app
COPY package.json /app
RUN npm i
COPY . /app
RUN npm run build
EXPOSE 5000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000
CMD ["npm","run","dev"]