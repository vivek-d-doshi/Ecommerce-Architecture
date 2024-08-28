import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base-entity.entity';

@Entity({ name: 'useridentity' })
export class UserIdentity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  UserId!: string;

  @Column({
    type: 'varchar',
    name: 'username',
    nullable: false,
  })
  Username!: string;

  @Column({
    type: 'bytea',
    name: 'password',
    nullable: false,
  })
  Password!: string;

  @Column({
    type: 'varchar',
    name: 'firstname',
    nullable: true,
    length: 40,
  })
  FirstName?: string;

  @Column({
    type: 'varchar',
    name: 'lastname',
    nullable: true,
    length: 40,
  })
  LastName?: string;

  @Column({
    type: 'varchar',
    name: 'email',
    nullable: true,
  })
  Email?: string;

  @Column({
    type: 'varchar',
    name: 'mobile',
    nullable: true,
    length: 10,
  })
  Mobile?: string;
}
