import { Module } from '@nestjs/common';
import { UrlcontrolService } from './urlcontrol.service';
import { UrlcontrolController } from './urlcontrol.controller';

@Module({
  controllers: [UrlcontrolController],
  providers: [UrlcontrolService],
})
export class UrlcontrolModule {}
