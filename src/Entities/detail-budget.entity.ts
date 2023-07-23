import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DetailBudget {
  @PrimaryGeneratedColumn()
  detailBudgetId: number;

  @Column()
  budgetId: number;

  @Column()
  description: string;

  @Column()
  typeMeasurement: string;

  @Column()
  unitValue: number;

  @Column()
  quantity: number;
}