#第一阶段 build-stage
FROM node:22 as build-stage

WORKDIR /app
COPY package.json .

RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build

#第二阶段 production-stage
FROM node:22 as production-stage

COPY --from=build-stage /app/dist /app/dist
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm install --production

EXPOSE 3000
EXPOSE 3306

# RUN npm run migration:run

CMD ["node", "/app/dist/main.js"]