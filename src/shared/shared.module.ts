import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          autoLoadEntities: true,
          type: configService.get<any>('database.type'),
          host: configService.get<string>('database.host'),
          port: configService.get<number>('database.port'),
          username: configService.get<string>('database.username'),
          password: configService.get<string>('database.password'),
          database: configService.get<string>('database.database'),
          autoLoadModels: configService.get<boolean>('database.autoLoadModels'),
          synchronize: configService.get<boolean>('database.synchronize'),
          logging: configService.get('database.logging'),
          cache: {
            type: 'redis',
            options: {
              socket: {
                host: configService.get<any>('bullRedis.host'),
                port: 6379,
              },
            },
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class SharedModule {}
