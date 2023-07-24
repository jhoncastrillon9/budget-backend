import { IsString, IsNotEmpty } from 'class-validator';

export class CreateConfigurationDto {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  cellphone: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  observationForBudgets: string;
}
