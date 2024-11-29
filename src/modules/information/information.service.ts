import { Injectable } from '@nestjs/common';
import { CreateInformationDto } from './dto/create-information.dto';
import { UpdateInformationDto } from './dto/update-information.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Information } from './entities/information.entity';
import { BaseDTO } from 'src/common/dto/base.dto';
import { User } from '../users/entities/user.entity';
import { omit } from 'es-toolkit';

@Injectable()
export class InformationService {
  constructor(
    @InjectRepository(Information)
    private readonly informationRepository: Repository<Information>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createInformationDto: CreateInformationDto) {
    const owner = await this.userRepository.findOne({
      where: { account: createInformationDto.owner },
    });
    const newInformtion = this.informationRepository.create({
      ...omit(createInformationDto, ['owner']),
      owner,
    });
    return this.informationRepository.save(newInformtion);
  }

  async findAll({ page, size }: BaseDTO) {
    const data = await this.informationRepository.find({
      skip: (page - 1) * size,
      take: size,
    });
    const total = await this.informationRepository.count();
    return { data, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} information`;
  }

  update(id: number, updateInformationDto: UpdateInformationDto) {
    return this.informationRepository.update(id, updateInformationDto);
  }

  remove(id: number) {
    return `This action removes a #${id} information`;
  }
}
