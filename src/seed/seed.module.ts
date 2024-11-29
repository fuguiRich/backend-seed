import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { CryptoService } from 'src/common/guards/password-guards/crypto.service';
import { Site } from 'src/modules/site/entities/site.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, Site])],
  providers: [SeedService, CryptoService],
})
export class SeedModule {}
