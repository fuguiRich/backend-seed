import { User } from 'src/modules/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Site extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @ManyToOne(() => User, (user) => user.addresss, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  owner: User;
}
