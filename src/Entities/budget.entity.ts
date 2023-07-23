import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  budgetId: number;

  @Column()
  budgetDate: Date;

  @Column()
  customerId: number;

  @Column()
  userId: number;

  @Column()
  observation: string;
}
