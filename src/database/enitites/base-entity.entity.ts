import { Column } from 'typeorm';

export class BaseEntity {
  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created',
    nullable: false,
  })
  Created!: Date;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated',
    nullable: false,
  })
  Updated!: Date;
}
