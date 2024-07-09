import { Module } from "@nestjs/common";
import { BuilderService } from "./builder.service";
import { BuilderController } from "./builder.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Builder } from "./models/builder.model";

@Module({
  imports: [SequelizeModule.forFeature([Builder])],
  controllers: [BuilderController],
  providers: [BuilderService],
  exports: [BuilderService],
})
export class BuilderModule {}
