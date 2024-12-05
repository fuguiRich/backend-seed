import { Injectable } from '@nestjs/common';
import { CreateUrlcontrolDto } from './dto/create-urlcontrol.dto';
import { UpdateUrlcontrolDto } from './dto/update-urlcontrol.dto';

@Injectable()
export class UrlcontrolService {
  create(createUrlcontrolDto: CreateUrlcontrolDto) {
    return 'This action adds a new urlcontrol';
  }

  findAll() {
    return `This action returns all urlcontrol`;
  }

  findOne(id: number) {
    return `This action returns a #${id} urlcontrol`;
  }

  update(id: number, updateUrlcontrolDto: UpdateUrlcontrolDto) {
    return `This action updates a #${id} urlcontrol`;
  }

  remove(id: number) {
    return `This action removes a #${id} urlcontrol`;
  }
}
