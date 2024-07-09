import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Company } from "../../company/models/company.model";

interface BuilderCreationAttr {
  name: string;
  age: number;
  company_id: number;
}

@Table({ tableName: "builders", createdAt: false, updatedAt: false })
export class Builder extends Model<Builder, BuilderCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  company_id: number;

  @BelongsTo(() => Company)
  company: Company;
}
