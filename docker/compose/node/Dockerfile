FROM node:lts

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN corepack enable
RUN pnpm add -g rimraf
