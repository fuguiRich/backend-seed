import { Injectable } from '@nestjs/common';
import * as bcrypto from 'bcrypt';
import { SaltOrRounds } from 'src/common/contants/password-constants';

@Injectable()
export class CryptoService {
  constructor() {}

  //加密
  async createPassWord(password: string): Promise<string> {
    const bhash = bcrypto.hash(password, SaltOrRounds);
    return bhash;
  }

  //比较
  async comparePassWord(password: string, hash: string): Promise<boolean> {
    const bcompare = bcrypto.compare(password, hash);
    return bcompare;
  }
}
