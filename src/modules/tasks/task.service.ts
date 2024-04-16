import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task } from "./schema/task.schema";
import { userService } from "../users/user.service";
import { createTaskInputDto } from "./dtos/createTaskInput.dto";
import { UpdateTaskInputDto } from "./dtos/updateTaskInput.dto";

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) { }

    createTask(input: createTaskInputDto) {
        const newTask = new this.taskModel(input);
        return newTask.save();

    }

    getAllTask() {
        return this.taskModel.find();
    }

    getTaskById(id: string) {
        return this.taskModel.findById(id)
    }

    getTaskByUser(userId: string) {
        return this.taskModel.find({ user: userId })
    }

    updateTask(id: string, input: UpdateTaskInputDto) {
        return this.taskModel.findByIdAndUpdate(id, input, { new: true })
    }


}