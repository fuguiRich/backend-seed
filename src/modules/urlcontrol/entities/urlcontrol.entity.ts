import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Urlcontrol extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  website: string;

  @Column()
  url: string;
}
