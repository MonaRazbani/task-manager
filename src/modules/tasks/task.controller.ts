import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { ApiBody, ApiParam } from "@nestjs/swagger";
import { createTaskInputDto } from "./dtos/createTaskInput.dto";
import mongoose from "mongoose";
import { UpdateTaskInputDto } from "./dtos/updateTaskInput.dto";

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Post()
    @ApiBody({ type: createTaskInputDto })
    async createTask(@Body() input: createTaskInputDto) {

        if (!mongoose.Types.ObjectId.isValid(input.user._id))
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)

        const newTask = await this.taskService.createTask(input);
        if (!newTask)
            throw new HttpException('insert task does not successed ', 500)

        return newTask;

    }
    @Get()
    async getAllTask() {
        return this.taskService.getAllTask();
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string) {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);

        const task = await this.taskService.getTaskById(id)
        if (!task)
            throw new HttpException('Task not Found', HttpStatus.NOT_FOUND)

        return task
    }

    @Get('by-user/:userId')
    async getTaskByUser(@Param('userId') userId: string) {
        if (!mongoose.Types.ObjectId.isValid(userId))
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);

        const task = await this.taskService.getTaskByUser(userId)
        if (!task)
            throw new HttpException('Task not Found', HttpStatus.NOT_FOUND)

        return task
    }

    @Patch(':id')
    @ApiBody({ type: UpdateTaskInputDto })
    async updateTask(@Param('id') id: string, input: UpdateTaskInputDto) {

        if (!mongoose.Types.ObjectId.isValid(id))
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);

        const task = await this.taskService.updateTask(id, input)
        if (!task)
            throw new HttpException('Task not Found', HttpStatus.NOT_FOUND)

        return task
    }
}