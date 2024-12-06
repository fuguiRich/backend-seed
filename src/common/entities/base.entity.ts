import { ApiHideProperty } from '@nestjs/swagger';
import { CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class BaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @ApiHideProperty()
  createTime: Date | string;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  })
  @ApiHideProperty()
  updateTime: Date | string;
}
