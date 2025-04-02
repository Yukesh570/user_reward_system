FROM node:18-alpine as build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY ./ ./ 
RUN yarn build


FROM node:18-alpine
WORKDIR /app

COPY --from=build /app/dist .
COPY --from=build /app/node_modules ./node_modules/
COPY --from=build /app/package.json ./package.json
CMD ["sh","-c","npm run server "]
    