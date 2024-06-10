import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const createToken = (data) => {
  const accessToken = jwt.sign(data, process.env.JWT_ACCESS_KEY, {
    expiresIn: process.env.ACCESS_TIME,
  });
  const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_KEY, {
    expiresIn: process.env.REFRESH_TIME,
  });
  return {
    accessToken,
    refreshToken,
  };
};

export const verifyToken = (type, token) => {
  const data = jwt.verify(
    token,
    type === "access" ? process.env.JWT_ACCESS_KEY : process.env.JWT_REFRESH_KEY
  );
  return data;
};
