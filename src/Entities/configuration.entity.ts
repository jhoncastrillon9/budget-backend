import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Configuration {
  @PrimaryColumn()
  companyName: string;

  @Column()
  cellphone: string;

  @Column()
  address: string;

  @Column()
  observationForBudgets: string;
}
