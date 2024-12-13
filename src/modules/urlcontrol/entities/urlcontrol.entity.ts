import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Urlcontrol extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'string', default: 'www' })
  website: string;

  @Column({ type: 'string', default: '/api' })
  url: string;

  @Column({ type: 'string', default: 'POST' })
  methods: string;
}
