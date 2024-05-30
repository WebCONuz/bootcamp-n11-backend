import userService from "../services/users.service.js";
import userValidate from "../validate/usersValidate.js";
import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import { createToken } from "../utits/jwt.js";
// import handleError from "../utits/resErr.js";
import ApiError from "../errors/ApiError.js";
import otpGenerator from "otp-generator";

let OTP, EXPIRE_TIME;
function AddMinutesToDate(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.status(200).send({ status: "OK", data: users });
    // return res.ok(200, { message: "OK", data: users });
  } catch (error) {
    console.log(error);
    ApiError.internal(res, {
      status: error.status,
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

    OTP = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const EXPIRE_TIME = Date.now() + 3 * 60000;
    console.log(Date.now());
    // EXPIRE_TIME = AddMinutesToDate(now, 3);

    const token = createToken({ email: newUser.email, role: newUser.role });
    res.status(201).send({
      status: "Register is OK",
      data: {
        token,
        otp: OTP,
        check: EXPIRE_TIME,
      },
    });
  } catch (error) {
    ApiError.internal(res, {
      status: error.status,
      msg: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};

export const loginUsers = async (req, res) => {
  try {
    const { email, password, otp, check } = req.body;
    if (!email || !password || !otp || !check) {
      ApiError.badRequest(res, {
        msg: error.message,
        friendlyMsg: "Ma'lumotlar to'liq emas",
      });
    }
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      ApiError.notFound(res, {
        msg: error.message,
        friendlyMsg: "Bunday foydalanuvchi mavjud emas",
      });
    }

    const result = await bcrypt.compare(password, oldUser.password);
    if (result) {
      let currentdate = Date.now();
      console.log(currentdate, EXPIRE_TIME, otp, OTP);
      if (currentdate <= check && otp === OTP) {
        const token = createToken({ email: oldUser.email, role: oldUser.role });
        return res.status(200).send({ status: "Login is OK", token });
      } else {
        ApiError.badRequest(res, {
          msg: "OTP ",
          friendlyMsg: "Email yoki Parol xato",
        });
      }
    } else {
      ApiError.badRequest(res, {
        msg: error.message,
        friendlyMsg: "Email yoki Parol xato",
      });
    }
  } catch (error) {
    ApiError.internal(res, {
      status: error.status,
      msg: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};

export const updateUsers = async (req, res) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    if (user) {
      res.status(200).send({ status: "UPDATED", data: user });
    } else {
      ApiError.badRequest(res, {
        msg: error.message,
        friendlyMsg: "Bunday user mavjud emas",
      });
    }
  } catch (error) {
    ApiError.internal(res, {
      status: error.status,
      msg: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const delUser = await userService.delete(req.params.id);
    if (!delUser)
      ApiError.badRequest(res, {
        msg: error.message,
        friendlyMsg: "Bunday user mavjud emas",
      });
    return res
      .status(200)
      .json({ message: "User is deleted successfully", data: delUser });
  } catch (error) {
    ApiError.internal(res, {
      status: error.status,
      msg: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};
