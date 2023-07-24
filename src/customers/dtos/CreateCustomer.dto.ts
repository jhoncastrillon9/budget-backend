import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsEmail()
    email: string;

    typeDocument: string;
    document: string;
    cellphone: string;
    address: string;
}