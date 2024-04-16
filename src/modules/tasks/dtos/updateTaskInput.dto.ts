import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { UserDto } from "src/modules/users/dtos/user.dto";

export class UpdateTaskInputDto {
    @IsOptional()
    @IsString()
    @ApiProperty()
    title: string

    @IsOptional()
    @IsString()
    @ApiProperty()
    description: string;

    @IsOptional()
    @ApiProperty()

    user: UserDto;
}