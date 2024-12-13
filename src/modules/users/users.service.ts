import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CryptoService } from 'src/common/guards/password-guards/crypto.service';
import { omit } from 'es-toolkit';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private cryptoService: CryptoService,
  ) {}
  async create({ account, password, email }: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { account: account },
    });
    if (existingUser)
      throw new BadRequestException(`${account} already exists`);
    console.log('create user:', { account, password, email });
    const newUser = this.userRepository.create({
      account,
      password: await this.cryptoService.createPassWord(password),
      email: email ? email : '',
    });
    await this.userRepository.save(newUser);
    console.log('create user success:', { account, password, email });
    return { code: 200, message: 'success' };
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne({ account, password }: LoginUserDto) {
    const findeUser = await this.userRepository.findOne({
      where: { account: account },
    });
    const isPasswordValid = await this.cryptoService.comparePassWord(
      password,
      findeUser.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('password is error');
    }
    return omit(findeUser, ['password']);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
