import { IsNumber } from 'class-validator';

export class ActivateUserDto {
  @IsNumber({}, { message: "Foydalanuvchi IDsi number bo'lishi kerak" })
  readonly userId: number;

  @IsNumber({}, { message: "OTP number bo'lishi kerak" })
  readonly otp: number;
}
