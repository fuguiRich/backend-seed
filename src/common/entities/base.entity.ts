import { ApiHideProperty } from '@nestjs/swagger';
import { CreateDateColumn,  UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @CreateDateColumn()
  @ApiHideProperty()
  createTime: Date | string;

  @UpdateDateColumn()
  @ApiHideProperty()
  updateTime: Date | string;
}
