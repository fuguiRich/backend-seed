FROM nginx:1.18.0
EXPOSE 8080
WORKDIR /app
COPY . /app
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

EXPOSE 3000
EXPOSE 3306

CMD ["nginx","-g", "./dist/main.js"]