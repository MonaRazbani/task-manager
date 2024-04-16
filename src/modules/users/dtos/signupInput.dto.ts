import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength, isString } from "class-validator";

export class SignUpInputDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    username: string;

    @IsEmail()
    @ApiProperty()
    email?: string;

    @MinLength(4)
    @IsNotEmpty()
    @ApiProperty()
    password: string;
}