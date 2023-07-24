import { IsDate, IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateBudgetDto {
  @IsDate()
  @IsNotEmpty()
  budgetDate: Date;

  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  observation: string;
}