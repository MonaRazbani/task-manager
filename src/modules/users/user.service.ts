import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";
import { SignUpInputDto } from "./dtos/signupInput.dto";
import { UpdateUserInputDto } from "./dtos/updateUserInput.dto";

@Injectable()
export class userService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    signUp(input: SignUpInputDto) {
        const newUser = new this.userModel(input)
        return newUser.save();
    }
    login() {

    }

    getAllUser() {
        return this.userModel.find();
    }

    getUserById(id: string) {
        return this.userModel.findById(id)
    }

    updateUser(id: string, input: UpdateUserInputDto) {
        return this.userModel.findByIdAndUpdate(id, input, { new: true })
    }

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id)
    }
}