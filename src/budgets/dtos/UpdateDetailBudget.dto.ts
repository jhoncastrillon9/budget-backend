import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class UpdateDetailBudgetDto {
  @IsNumber()
  @IsNotEmpty()
  budgetId: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  typeMeasurement: string;

  @IsNumber()
  @IsNotEmpty()
  unitValue: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
