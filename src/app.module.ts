import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { InformationModule } from './modules/information/information.module';
import { SiteModule } from './modules/site/site.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './modules/site/entities/site.entity';
import { Information } from './modules/information/entities/information.entity';
import { User } from './modules/users/entities/user.entity';

import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   load: [configuration],
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'coin-admin-db-1',
      port: 3306,
      username: 'bobroot',
      password: 'infromation@admin@bobroot',
      database: 'bob',
      entities: [User, Information, Site],
      autoLoadEntities: true,
      logging: true,
      // synchronize: true,
      // dropSchema: true, //每次启动会删除表
    }),
    UsersModule,
    InformationModule,
    SiteModule,
    SeedModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
