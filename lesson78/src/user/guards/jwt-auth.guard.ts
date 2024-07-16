import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class UserJwtGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    // const res = context.switchToHttp().getResponse();

    const tokenString = req.headers.authorization;

    const bayer = tokenString.split(' ')[0];
    const token = tokenString.split(' ')[1];

    if (bayer !== 'Bearer' || !token) {
      throw new UnauthorizedException({
        message: "Foydalanuvchi avtorizatsiyadan o'tmagan",
      });
    }
    const user = this.jwtService.verify(token);
    req.user = user;

    console.log(user);

    return true;
  }
}
