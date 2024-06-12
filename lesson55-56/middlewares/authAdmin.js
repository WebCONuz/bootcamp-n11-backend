import { verifyToken } from "../utits/jwt.js";

const authAdmin = (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization?.split(" ")[1];
  if (token) {
    const data = verifyToken("access", token);
    if (data.role?.includes("ADMIN") || data.role?.includes("AUTHOR")) {
      req.user = data;
      next();
    } else {
      return res
        .status(401)
        .json({ msg: "Foydalanuvchi bu huquqqa egam emas" });
    }
  } else {
    return res.status(401).json({ msg: "Foydalanuvchi ro'yxatdan o'tmagan" });
  }
};

export default authAdmin;
