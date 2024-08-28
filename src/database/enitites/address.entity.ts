import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // OneToOne,
  // JoinColumn,
} from 'typeorm';
import { addressTypeEnum } from './enums';
import { BaseEntity } from './base-entity.entity';

@Entity({ name: 'address' })
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'address_id' })
  AddressId!: string;

  @Column('uuid', {
    name: 'user_id',
    nullable: false,
  })
  UserId!: string;

  @Column({
    type: 'enum',
    name: 'address_type',
    nullable: false,
  })
  AddressType?: addressTypeEnum;

  @Column({
    type: 'string',
    name: 'address_line_one',
    length: 40,
    nullable: true,
  })
  AddressLine1?: string;

  @Column({
    type: 'string',
    name: 'address_line_two',
    length: 40,
    nullable: true,
  })
  AddressLine2?: string;

  @Column({
    type: 'string',
    name: 'city',
    length: 25,
    nullable: true,
  })
  City?: string;

  @Column({
    type: 'string',
    name: 'country',
    length: 50,
    nullable: true,
  })
  Country?: string;

  @Column({
    type: 'string',
    name: 'zipcode',
    length: 7,
    nullable: true,
  })
  ZipCode?: number;

  // @OneToOne(() => UserIdentity)
  // @JoinColumn({ name: 'user_id' })
  // userId!: UserIdentity;
}
