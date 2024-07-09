import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Builder } from "../../builder/models/builder.model";

interface CompanyCreationAttr {
  name: string;
  address: string;
  phone: string;
}

@Table({ tableName: "company" })
export class Company extends Model<Company, CompanyCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  name: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  phone: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: number;

  @HasMany(() => Builder)
  builders: Builder[];
}
