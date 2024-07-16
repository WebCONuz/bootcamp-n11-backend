import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { MailerModule } from '../mailer/mailer.module';
import { User } from './entity/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MailerModule,
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_KEY || 'SeCrEt',
      signOptions: {
        expiresIn: '5m',
      },
    }),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UserModule {}
