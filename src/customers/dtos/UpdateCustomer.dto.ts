import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { CreateCustomerDto } from "./CreateCustomer.dto";

export class UpdateCustomerDto extends CreateCustomerDto {

    @IsNotEmpty()    
    customerId: number;
}