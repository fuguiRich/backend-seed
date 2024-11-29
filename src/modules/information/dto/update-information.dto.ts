import { OmitType } from '@nestjs/swagger';
import { CreateInformationDto } from './create-information.dto';

export class UpdateInformationDto extends OmitType(CreateInformationDto, [
  'owner',
]) {}
