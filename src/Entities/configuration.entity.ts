import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Configuration {  
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'companyId',
  })
  companyId: number;
  
  @Column()  
  companyName: string;

  @Column()
  cellphone: string;

  @Column()
  address: string;

  @Column()
  observationForBudgets: string;
}
