import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserDto {
    @IsString()
    @IsOptional()
    @ApiProperty()

    username: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    _id: string;
}