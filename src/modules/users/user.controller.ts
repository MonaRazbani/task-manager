import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { userService } from "./user.service";
import { SignUpInputDto } from "./dtos/signupInput.dto";
import { ApiBody, ApiParam } from "@nestjs/swagger";
import mongoose from "mongoose";
import { UpdateUserInputDto } from "./dtos/updateUserInput.dto";


@Controller('user')
export class userContorller {

    constructor(private userService: userService) { }
    // @Post()
    // async create(@Body() createCatDto: CreateCatDto) {
    //   this.catsService.create(createCatDto);
    // }
    @Post()
    @ApiBody({ type: SignUpInputDto })
    // @UsePipes(new ValidationPipe())
    async signUp(@Body() input: SignUpInputDto) {
        return this.userService.signUp(input);

    }
    @Get()
    async getAllUser() {
        return this.userService.getAllUser()
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw new HttpException('bad request', HttpStatus.BAD_REQUEST)

        const user = await this.userService.getUserById(id)
        if (!user)
            throw new HttpException('user not found ', HttpStatus.NOT_FOUND)
        return user;
    }

    @Patch(':id')
    @ApiBody({ type: UpdateUserInputDto })
    async updateUser(@Param('id') id: string, @Body() input: UpdateUserInputDto) {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw new HttpException('bad request', HttpStatus.BAD_REQUEST)

        const updatedUser = await this.userService.updateUser(id, input)
        if (!updatedUser)
            throw new HttpException('user not found ', HttpStatus.NOT_FOUND)

        return updatedUser;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw new HttpException('bad request', HttpStatus.BAD_REQUEST)

        const updatedUser = await this.userService.deleteUser(id)
        if (!updatedUser)
            throw new HttpException('user not found ', HttpStatus.NOT_FOUND)

        return `${updatedUser.username} has been deleted `;
    }

}
