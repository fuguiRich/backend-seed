import { Module } from '@nestjs/common';
import { InformationService } from './information.service';
import { InformationController } from './information.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Information } from './entities/information.entity';
import { User } from '../users/entities/user.entity';

@Module({
  controllers: [InformationController],
  imports: [TypeOrmModule.forFeature([Information, User])],
  providers: [InformationService],
})
export class InformationModule {}
