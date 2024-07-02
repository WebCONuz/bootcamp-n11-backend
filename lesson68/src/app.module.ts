import { Module } from "@nestjs/common";
import { AppController } from "./app.controllers";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./schemas/user..schema";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot("mongodb://localhost/nest-test"),
    MongooseModule.forFeature([{ name: "users", schema: UserSchema }]),
  ],
  exports: [],
})
export class appModule {}
