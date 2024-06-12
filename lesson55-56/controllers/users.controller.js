import userService from "../services/users.service.js";
import userValidate from "../validate/usersValidate.js";
import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import { createToken, verifyToken } from "../utits/jwt.js";
// import handleError from "../utits/resErr.js";
import ApiError from "../errors/ApiError.js";
// import otpGenerator from "otp-generator";

import { v4 as uuidv4 } from "uuid";
import mailService from "../utits/mailService.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.status(200).send({ status: "OK", data: users });
    // return res.ok(200, { message: "OK", data: users });
  } catch (error) {
    console.log(error);
    ApiError.internal(res, {
      message: error.message,
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
        friendlyMsg: "Ma'lumotlar to'liq kiritilmagan",
      });
    }
    const { email, phone, password, card, address, description, full_name } =
      req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const userActivationLink = uuidv4();

    const newUser = await userService.create({
      email,
      phone,
      password: hashPassword,
      card,
      address,
      description,
      full_name,
      isActive: false,
      role: ["USER", "AUTHOR", "ADMIN"],
      userActivationLink,
      refresh_token: "",
    });

    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}:${process.env.PORT}/api/users/activate?uuid=${userActivationLink}&user=${newUser._id}`
    );

    res.status(201).send({ status: "Register is OK" });
  } catch (error) {
    ApiError.internal(res, {
      message: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};

export const activateUsers = async (req, res) => {
  const user = await userService.getOne(req.query.user);
  if (!user) {
    return res.status(404).send("Error");
  }
  if (req.query.uuid === user[0]?.userActivationLink) {
    await userService.activate(req.query.user);

    const payload = {
      id: user[0]._id,
      role: user[0].role,
      isActive: user[0].isActive,
    };
    const tokens = createToken(payload);
    await userService.update(user[0]._id, {
      refresh_token: tokens.refreshToken,
    });

    res.cookie("refreshToken", tokens.refreshToken, {
      maxAge: 15 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return res.status(200).send({ status: "Login is OK", data: tokens });
  } else {
    res.status(401).send("<h1>Siz faollasha olmadingiz</h1>");
  }
};

export const loginUsers = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      ApiError.badRequest(res, {
        message: "Please enter all fields: email, password",
        friendlyMsg: "Ma'lumotlar to'liq emas",
      });
    }
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      ApiError.notFound(res, {
        message: "User is not found",
        friendlyMsg: "Bunday foydalanuvchi mavjud emas",
      });
    }

    const result = await bcrypt.compare(password, oldUser.password);
    if (result) {
      const payload = {
        id: oldUser._id,
        role: oldUser.role,
        isActive: oldUser.isActive,
      };
      const tokens = createToken(payload);
      await userService.update(oldUser._id, {
        refresh_token: tokens.refreshToken,
      });

      res.cookie("refreshToken", tokens.refreshToken, {
        maxAge: 15 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.status(200).send({ status: "Login is OK", data: tokens });
    } else {
      ApiError.badRequest(res, {
        message: "Password is not true",
        friendlyMsg: "Email yoki Parol xato",
      });
    }
  } catch (error) {
    ApiError.internal(res, {
      message: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};

export const logout = async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.badRequest({ friendlyMsg: "token topilmadi" });
  const user = await userService.oneUpdate(
    {
      refresh_token: refreshToken,
    },
    {
      refresh_token: "",
    }
  );

  if (!user) return res.badRequest({ friendlyMsg: "user topilmadi" });
  res.clearCookie("refreshToken");
  res.status(200).send("Log out");
};

export const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken)
      return res.badRequest({ friendlyMsg: "token topilmadi" });

    const payload = verifyToken("refresh", refreshToken);
    const oldUser = await userService.getOneByParams({
      refresh_token: refreshToken,
    });

    if (!payload || !oldUser) {
      ApiError.unauthorized(res, {
        message: "UNAUTHORIZED",
        friendlyMsg: "Token xato",
      });
    }

    const newPayload = {
      id: oldUser._id,
      role: oldUser.role,
      isActive: oldUser.isActive,
    };

    const tokens = createToken(newPayload);

    await userService.update(oldUser._id, {
      refresh_token: tokens.refreshToken,
    });

    return res.status(200).send({ status: "OK", data: tokens });
  } catch (error) {
    ApiError.internal(res, {
      message: error.message,
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
        message: "User is not found",
        friendlyMsg: "Bunday user mavjud emas",
      });
    }
  } catch (error) {
    ApiError.internal(res, {
      message: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const delUser = await userService.delete(req.params.id);
    if (!delUser)
      ApiError.badRequest(res, {
        message: error.message,
        friendlyMsg: "Bunday user mavjud emas",
      });
    return res
      .status(200)
      .json({ message: "User is deleted successfully", data: delUser });
  } catch (error) {
    ApiError.internal(res, {
      message: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};
