FROM node:14-alpine as build

ENV APP_STAGE="docker"

RUN apk add yarn

WORKDIR /user/src

COPY package.json yarn.lock ./

COPY packages/back/package.json ./packages/back/
COPY packages/types/package.json ./packages/types/
COPY packages/front/package.json ./packages/front/

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build


FROM build as back

WORKDIR /user/src/packages/back

CMD ["yarn", "start:prod"]



FROM build as front

WORKDIR /user/src/packages/front

CMD ["yarn", "start"]
