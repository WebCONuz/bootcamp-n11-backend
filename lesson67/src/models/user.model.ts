import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  gmail: { type: DataTypes.STRING(30) },
  password: { type: DataTypes.STRING(100) },
  is_active: { type: DataTypes.BOOLEAN },
  status: { type: DataTypes.BOOLEAN },
});

export default User;
