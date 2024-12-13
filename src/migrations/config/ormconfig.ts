import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  port: (process.env.MYSQL_PORT as unknown as number) || 3306,
  username: process.env.MYSQL_USERNAME || 'bobroot',
  password: process.env.MYSQL_PASSWORD || 'infromation@admin@bobroot',
  database: process.env.MYSQL_DATABASE || 'bob',
  entities: ['src/modules/**/entities/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
