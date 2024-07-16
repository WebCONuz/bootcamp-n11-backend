import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ActivateUserDto } from './dto/active-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './user.service';
import { UserJwtGuard } from './guards/jwt-auth.guard';
import { UserSelfGuard } from './guards/user-self.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // Add User
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  // Get All Users
  @UseGuards(UserJwtGuard)
  @UseGuards(UserSelfGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  // Get one Users by Id
  @Get(':id')
  getOneUser(@Param('id') id: number) {
    return this.userService.getOneUser(id);
  }

  // Update Users
  @Put(':id')
  update(@Param('id') id: number, @Body() createUserDto: CreateUserDto) {
    return this.userService.update(id, createUserDto);
  }

  // Delete User
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }

  // Activate User
  @Post('activate')
  activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.userService.activateUser(activateUserDto);
  }

  // Ban User
  @Post('ban')
  banUser(@Body() banUserDto: ActivateUserDto) {
    return this.userService.banUser(banUserDto);
  }
}
