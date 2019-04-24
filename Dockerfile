FROM node:lts-alpine as build
RUN mkdir /app
WORKDIR /app
COPY package.json /app/package.json
RUN apk add --no-cache --update --virtual .build-deps  \
    autoconf \
    automake \
    bash \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm && npm install
COPY . /app
RUN npm run build
RUN apk del --no-cache .build-deps

FROM nginx:alpine
COPY --from=build /app/dist /app
COPY /config/front.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]