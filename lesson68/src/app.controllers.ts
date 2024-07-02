import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateUserDto } from "./dto/create.dto";

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("users")
  getAll() {
    return this.appService.getAll();
  }

  @Post("users")
  createUser(@Body() userDto: CreateUserDto) {
    return this.appService.createUser(userDto);
  }
}
