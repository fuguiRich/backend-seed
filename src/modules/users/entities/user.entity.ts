import { BaseEntity } from 'src/common/entities/base.entity';
import { Information } from 'src/modules/information/entities/information.entity';
import { Site } from 'src/modules/site/entities/site.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  account: string;

  @Column()
  password: string;

  @Column({ default: 'userEmail@gamil.com' })
  email: string;

  @OneToMany(() => Information, (information) => information.owner)
  informations: Information[];

  @OneToMany(() => Site, (site) => site.owner)
  addresss: Site[];
}
