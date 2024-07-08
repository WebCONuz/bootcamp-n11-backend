import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AuthUserGuard } from "./auth-user/auth-user.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalGuards(new AuthUserGuard());

  await app.listen(3000, () => console.log("Salom dunyo"));
}
bootstrap();
