import articleService from "../services/articles.service.js";
import articleValidate from "../validate/articlesValidate.js";
import bcrypt from "bcrypt";
import { createToken } from "../utits/jwt.js";
import handleError from "../utits/resErr.js";

export const getAllArticles = async (req, res) => {
  try {
    const articles = await articleService.getAll();
    res.status(200).send({ status: "OK", data: articles });
  } catch (error) {
    handleError(res, error);
  }
};

export const createArticles = async (req, res) => {
  try {
    const { error, value } = articleValidate.validate(req.body);
    if (error) {
      return res
        .status(400)
        .send({ status: "BAD REQUEST", msg: error.details[0].message });
    }
    const { email, phone, password, card, address, description, full_name } =
      req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const newArticle = await articleService.create({
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

    const token = createToken({
      email: newArticle.email,
      role: newArticle.role,
    });
    res.status(201).send({ status: "Register is OK", token });
  } catch (error) {
    handleError(res, error);
  }
};

export const updateArticles = async (req, res) => {
  try {
    const article = await articleService.update(req.params.id, req.body);
    if (article) {
      res.status(200).send({ status: "UPDATED", data: article });
    } else {
      res.status(400).send({ status: "Article is not exist" });
    }
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const delArticle = await articleService.deleteArticle(req.params.id);
    if (!delArticle)
      return res
        .status(400)
        .json({ message: "Bunday Article bazada mavjud emas." });
    return res
      .status(200)
      .json({ message: "Article is deleted successfully", data: delArticle });
  } catch (error) {
    handleError(res, error);
  }
};
