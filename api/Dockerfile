FROM node:16-alpine3.16 AS builder

WORKDIR /api

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:16-alpine3.16 AS release

USER node

WORKDIR /api

COPY --chown=node:node --from=builder /api/dist ./

CMD ["node", "main.js"]
