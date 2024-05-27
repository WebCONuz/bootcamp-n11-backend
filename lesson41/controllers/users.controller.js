import userService from "../services/users.service.js";
import userValidate from "../validate/usersValidate.js";
import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import { createToken } from "../utits/jwt.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.status(200).send({ status: "OK", data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};

export const createUsers = async (req, res) => {
  try {
    const { error, value } = userValidate.validate(req.body);
    if (error) {
      return res
        .status(400)
        .send({ status: "BAD REQUEST", msg: error.details[0].message });
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
    res
      .status(500)
      .json({ message: "Enternal server error", errMsg: error.message });
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
    return res
      .status(500)
      .json({ message: "Enternal server error", errMsg: error.message });
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
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};
