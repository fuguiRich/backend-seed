import { PartialType } from '@nestjs/swagger';
import { CreateUrlcontrolDto } from './create-urlcontrol.dto';

export class UpdateUrlcontrolDto extends PartialType(CreateUrlcontrolDto) {}
