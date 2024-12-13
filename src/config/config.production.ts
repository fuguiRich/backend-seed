import { defineConfig } from './defineConfig';

export default defineConfig({
  database: {
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'coin-admin-db',
    port: process.env.MYSQL_POST || 3306,
    username: process.env.MYSQL_USERNAME || 'bobroot',
    password: process.env.MYSQL_PASSWORD || 'infromation@admin@bobroot',
    database: process.env.MYSQL_DATABASE || 'bob',
    autoLoadModels: true,
    logging: true,
    // synchronize: true,
    // dropSchema: true, //每次启动会删除表
  },
});
