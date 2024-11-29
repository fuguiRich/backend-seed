import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CryptoService } from 'src/common/guards/password-guards/crypto.service';
import { Site } from 'src/modules/site/entities/site.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Site)
    private readonly siteRepository: Repository<Site>,
    private cryptoService: CryptoService,
  ) {}
  async seed() {
    const existingUser = await this.userRepository.findOne({
      where: { account: 'admin' },
    });
    if (existingUser) {
      return;
    }
    const address_1 = new Site();
    address_1.address = 'TJixRUEY4D7Cemnc9MzLuSJGCw7coetmTa';
    const address_2 = new Site();
    address_2.address = 'TMYzPa4eVkVeYh7jG3rTsb3pXCft96SS5m';

    const password = await this.cryptoService.createPassWord('hyl@gamil.com');
    const user = this.userRepository.create({
      account: 'admin',
      password: password,
    });
    await this.userRepository.save(user);
    const admin = await this.userRepository.findOne({
      where: { account: 'admin' },
    });
    address_1.owner = admin;
    address_2.owner = admin;
    await this.siteRepository.save([address_1, address_2]);
  }
}
