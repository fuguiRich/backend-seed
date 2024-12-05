import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Information extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  amount: string;

  @Column()
  balance: string;

  @Column({ default: false })
  softDelete: boolean;

  @Column({ default: false })
  used: boolean;

  @ManyToOne(() => User, (user) => user.informations, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  owner: User;
}
