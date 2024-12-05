import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UrlcontrolService } from './urlcontrol.service';
import { CreateUrlcontrolDto } from './dto/create-urlcontrol.dto';
import { UpdateUrlcontrolDto } from './dto/update-urlcontrol.dto';

@Controller('urlcontrol')
export class UrlcontrolController {
  constructor(private readonly urlcontrolService: UrlcontrolService) {}

  @Post()
  create(@Body() createUrlcontrolDto: CreateUrlcontrolDto) {
    return this.urlcontrolService.create(createUrlcontrolDto);
  }

  @Get()
  findAll() {
    return this.urlcontrolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.urlcontrolService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUrlcontrolDto: UpdateUrlcontrolDto,
  ) {
    return this.urlcontrolService.update(+id, updateUrlcontrolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urlcontrolService.remove(+id);
  }
}
