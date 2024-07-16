import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcryptjs';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ActivateUserDto } from './dto/active-user.dto';
import { MailerService } from '../mailer/mailer.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private readonly mailerService: MailerService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const hashPassword = await bcrypt.hash(createUserDto.password, 7);
      const newUser = await this.userRepository.create({
        ...createUserDto,
        password: hashPassword,
      });

      // await this.mailerService.sendMail(
      //   createUserDto.email,
      //   'Congratulation, you are registred succefully!',
      //   'Congratulation, you are registred succefully!',
      //   '<p>This is your OTP: 1234</p>',
      // );

      const options = {
        id: newUser.id,
        email: newUser.email,
        active: newUser.is_active,
      };
      const token = this.jwtService.sign(options);

      return token;
    } catch (err) {
      console.log(err);
    }
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getOneUser(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return user;
  }

  async update(id: number, createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 7);
    const obj = { ...createUserDto, password: hashPassword };
    return this.userRepository.update(obj, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number) {
    return this.userRepository.destroy({ where: { id } });
  }

  async activateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userRepository.findByPk(activateUserDto.userId);
    if (!user) {
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    user.is_active = true;
    await user.save();
    return user;
  }

  async banUser(banUserDto: ActivateUserDto) {
    const user = await this.userRepository.findByPk(banUserDto.userId);
    if (!user) {
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    user.is_block = true;
    await user.save();
    return user;
  }
}
