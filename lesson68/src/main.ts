import { NestFactory } from "@nestjs/core";
import { appModule } from "./app.module";

const start = async () => {
  const app = await NestFactory.create(appModule);
  const port = 3000;

  app.listen(port, () => {
    console.log(`Dastur ${port}-da ishga tushdi`);
  });
};

start();
