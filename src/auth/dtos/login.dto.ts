import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @IsNotEmpty()    
    username: string;

    @IsNotEmpty()    
    password: string;
}