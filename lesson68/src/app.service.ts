import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schemas/user..schema";

@Injectable()
export class AppService {
  constructor(@InjectModel("users") private userModel: Model<User>) {}
  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(data);
    await newUser.save();
    return newUser;
  }
}
