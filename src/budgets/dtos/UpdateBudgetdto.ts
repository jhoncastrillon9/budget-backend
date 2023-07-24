import { IsDate, IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class UpdateBudgetDto {
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
  