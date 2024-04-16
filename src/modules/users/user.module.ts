import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schema/user.schema";
import { userContorller } from "./user.controller";
import { userService } from "./user.service";

@Module({
    imports: [MongooseModule.forFeature(
        [{
            name: User.name,
            schema: UserSchema
        }]
    )],
    controllers: [userContorller],
    providers: [userService],
})
export class userModule {

}