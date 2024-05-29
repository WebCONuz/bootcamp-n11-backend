import userService from "../services/users.service.js";
import userValidate from "../validate/usersValidate.js";
import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import { createToken } from "../utits/jwt.js";
import handleError from "../utits/resErr.js";
import ApiError from "../errors/ApiError.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = userService.getAll();
    console.log(users);
    res.status(200).send({ status: "OK", data: users });
  } catch (error) {
    // handleError(res, error);
    ApiError.internal(res, {
      errObject: error,
      stattus: error.status,
      msg: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};

export const createUsers = async (req, res) => {
  try {
    const { error, value } = userValidate.validate(req.body);
    if (error) {
      ApiError.badRequest(res, {
        message: error.message,
        friendlyMsg: "Ma'lumotlr to'liq kiritilmagan",
      });
    }
    const { email, phone, password, card, address, description, full_name } =
      req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userService.create({
      email,
      phone,
      password: hashPassword,
      card,
      address,
      description,
      full_name,
      isActive: true,
      role: ["USER", "AUTHOR", "ADMIN"],
    });

    const token = createToken({ email: newUser.email, role: newUser.role });
    res.status(201).send({ status: "Register is OK", token });
  } catch (error) {
    handleError(res, error);
  }
};

export const loginUsers = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ msg: "Ma'lumotlar to'liq emas" });
    }

    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.status(404).send({ msg: "Buday foydalanuvchi mavjud emas" });
    }

    const result = await bcrypt.compare(password, oldUser.password);
    if (result) {
      const token = createToken({ email: oldUser.email, role: oldUser.role });
      return res.status(201).send({ status: "Login is OK", token });
    } else {
      return res.status(401).send({ msg: "Email yoki Parol xato" });
    }
  } catch (error) {
    handleError(res, error);
  }
};

export const updateUsers = async (req, res) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    if (user) {
      res.status(200).send({ status: "UPDATED", data: user });
    } else {
      res.status(400).send({ status: "User is not exist" });
    }
  } catch (error) {
    handleError(res, error);
  }
};
