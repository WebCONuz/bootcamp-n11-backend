import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company-dto";
import { Company } from "./models/company.model";
import { UpdateCompanyDto } from "./dto/update-company-dto";

@Controller("company")
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto
  ): Promise<Company> {
    return this.companyService.createCompany(createCompanyDto);
  }

  @Get()
  async getAllCompany(): Promise<Company[]> {
    return this.companyService.getAllCompany();
  }

  @Get(":id")
  async getById(@Param("id") id: number): Promise<Company> {
    return this.companyService.getById(id);
  }

  @Get("name/:name")
  async getByName(@Param("name") name: string): Promise<Company> {
    return this.companyService.getByName(name);
  }

  @Delete(":id")
  async deleteCompanyById(@Param("id") id: number): Promise<number> {
    return this.companyService.deleteCompanyById(id);
  }

  @Put(":id")
  async updateCompanyById(
    @Param("id") id: number,
    @Body() updateCompany: UpdateCompanyDto
  ): Promise<Company> {
    return this.companyService.updateCompanyById(id, updateCompany);
  }
}
