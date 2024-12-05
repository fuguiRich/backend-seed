import { defineConfig } from './defineConfig';

export default defineConfig({
  database: {
    type: 'mysql',
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 3306,
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || '123456',
    database: process.env.MYSQL_DATABASE || 'bob',
    autoLoadModels: true,
    logging: true,
    // synchronize: true,
    // dropSchema: true, //每次启动会删除表
  },
});
