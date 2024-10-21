FROM node:lts

ENV PNPM_HOME=/pnpm
ENV PATH="${PATH}:${PNPM_HOME}"

RUN corepack enable  \
    && pnpm config set store-dir /pnpm/store  \
    && pnpm add -g rimraf
