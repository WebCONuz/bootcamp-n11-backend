import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: "Ismi string bo'lishi kerak" })
  readonly full_name: string;

  @IsString({ message: "Email string bo'lishi kerak" })
  @IsEmail({}, { message: "Noto'g'ri email" })
  readonly email: string;

  @IsString({ message: "Parol string bo'lishi kerak" })
  @MinLength(6, { message: "Parol kamida 6ta belgidan iborat bo'lishi kerak" })
  readonly password: string;
}
