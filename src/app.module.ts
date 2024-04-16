// src/app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './modules/users/user.module';
import { TaskModule } from './modules/tasks/task.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017"),
    userModule,
    TaskModule
  ],

  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }

