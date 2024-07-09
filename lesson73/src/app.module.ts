import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { CompanyModule } from "./company/company.module";
import { Company } from "./company/models/company.model";
import { Builder } from "./builder/models/builder.model";
import { BuilderModule } from "./builder/builder.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Company, Builder],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    CompanyModule,
    BuilderModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
