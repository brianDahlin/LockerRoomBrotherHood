FROM node:16-alpine AS build
RUN apk add --no-cache libc6-compat git

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build /app/static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
