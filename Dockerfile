FROM node:lts AS build

COPY . /home/node/app

WORKDIR /home/node/app/

RUN corepack enable \
    && pnpm i --ignore-scripts  \
    && pnpm build \
    && cp ./packages/api/package.json ./packages/api/dist/package.json \
    && cd ./packages/api/dist \
    && npm i --omit=dev


FROM node:lts-bookworm-slim

COPY --from=build /home/node/app/packages/api/dist /home/node/app
COPY --from=build /home/node/app/packages/spa/dist /home/node/app/spa

WORKDIR /home/node/app/

ENV PORT=80

EXPOSE 80

CMD ["node", "main.js"]
