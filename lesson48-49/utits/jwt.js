import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const createToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_KEY, { expiresIn: "15m" });
  return token;
};

export const compareToken = (token) => {
  const data = jwt.verify(token, process.env.JWT_KEY);
  return data;
};
