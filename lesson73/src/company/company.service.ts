import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Company } from "./models/company.model";
import { CreateCompanyDto } from "./dto/create-company-dto";
import { UpdateCompanyDto } from "./dto/update-company-dto";

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyRepo: typeof Company) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    try {
      const company = await this.companyRepo.create(createCompanyDto);
      return company;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllCompany(): Promise<Company[]> {
    return this.companyRepo.findAll({ include: { all: true } });
  }

  async getById(id: number): Promise<Company> {
    return this.companyRepo.findByPk(id);
  }

  async getByName(name: string): Promise<Company> {
    return this.companyRepo.findOne({ where: { name } });
  }

  async deleteCompanyById(id: number): Promise<number> {
    return this.companyRepo.destroy({ where: { id } });
  }

  async updateCompanyById(id: number, updateCompanyDto): Promise<Company> {
    const company = await this.companyRepo.update(updateCompanyDto, {
      where: { id },
      returning: true,
    });

    return company[1][0];
  }
}
