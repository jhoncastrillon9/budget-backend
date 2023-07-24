import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { CreateUserDto } from "./CreateUser.dto";

export class UpdateUserDto extends CreateUserDto {
    userId: number;
}