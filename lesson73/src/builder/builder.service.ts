import { Injectable } from "@nestjs/common";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Builder } from "./models/builder.model";

@Injectable()
export class BuilderService {
  constructor(@InjectModel(Builder) private builderRepo: typeof Builder) {}

  async create(createBuilderDto: CreateBuilderDto) {
    try {
      const builder = await this.builderRepo.create(createBuilderDto);
      return builder;
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return this.builderRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} builder`;
  }

  update(id: number, updateBuilderDto: UpdateBuilderDto) {
    return `This action updates a #${id} builder`;
  }

  remove(id: number) {
    return `This action removes a #${id} builder`;
  }
}
