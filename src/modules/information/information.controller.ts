import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { InformationService } from './information.service';
import { CreateInformationDto } from './dto/create-information.dto';
import { UpdateInformationDto } from './dto/update-information.dto';
import { BaseDTO } from 'src/common/dto/base.dto';

@Controller('/api/information')
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @Post()
  create(@Body() createInformationDto: CreateInformationDto) {
    return this.informationService.create(createInformationDto);
  }

  @Get()
  findAll(@Query() query: BaseDTO) {
    return this.informationService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.informationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInformationDto: UpdateInformationDto,
  ) {
    return this.informationService.update(+id, updateInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informationService.remove(+id);
  }
}
