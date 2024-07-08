import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthUserGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    const headers = req.headers.authorization;
    if (!headers) {
      throw new UnauthorizedException();
    }

    const [type, token] = headers?.split(" ");
    if (type !== "Bearer" || !token) {
      throw new UnauthorizedException();
    } else {
      req.user = token;

      return true;
    }
  }
}
