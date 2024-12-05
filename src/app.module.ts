import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { InformationModule } from './modules/information/information.module';
import { SiteModule } from './modules/site/site.module';

import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { SharedModule } from './shared/shared.module';
import { UrlcontrolModule } from './modules/urlcontrol/urlcontrol.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    SharedModule,

    UsersModule,
    InformationModule,
    SiteModule,
    SeedModule,
    UrlcontrolModule,
  ],

  controllers: [],
  providers: [AppService],
})
export class AppModule {}
