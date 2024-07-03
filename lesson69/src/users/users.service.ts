import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user-dto";
import { User } from "./models/users.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel("users") private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }
}
