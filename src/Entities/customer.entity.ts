import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'customerId',
  })
  customerId: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    nullable: false,
    default: '',
    name: 'email',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
    name: 'typeDocument',
  })
  typeDocument: string;

  @Column({
    nullable: false,
    default: '',
    name: 'document',
  })  
  document: string;

  @Column({
    nullable: false,
    default: '',
    name: 'cellphone',
  })  
  cellphone: string;

  @Column({
    nullable: false,
    default: '',
    name: 'address',
  })  
  address: string;


}