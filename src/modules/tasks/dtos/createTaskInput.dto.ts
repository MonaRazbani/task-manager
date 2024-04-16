import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import { UserDto } from "src/modules/users/dtos/user.dto";

export class createTaskInputDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()

    title: string;

    @IsOptional()
    @IsString()
    @ApiProperty()

    description: string;

    @IsOptional()
    @ApiProperty()
    user: UserDto;
}