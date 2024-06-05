import articleService from "../services/article.service.js";
import articleValidate from "../validate/articlesValidate.js";
// import handleError from "../utits/resErr.js";
import ApiError from "../errors/ApiError.js";

export const getAllArticles = async (req, res) => {
  try {
    const articles = await articleService.getAll();
    res.status(200).send({ status: "OK", data: articles });
  } catch (error) {
    ApiError.internal(res, {
      message: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};

export const createArticles = async (req, res) => {
  try {
    const { error, value } = articleValidate.validate(req.body);
    if (error) {
      ApiError.badRequest(res, {
        message: error.details[0].message,
        friendlyMsg: "Ma'lumotlarni kiritishda xatolik",
      });
    }
    console.log(value);
    const newArticle = await articleService.create(req.body);

    res
      .status(201)
      .send({ status: "Article is created successfully", data: newArticle });
  } catch (error) {
    ApiError.internal(res, {
      message: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};

export const updateArticles = async (req, res) => {
  try {
    const article = await articleService.update(req.params.id, req.body);
    if (article) {
      res.status(200).send({ status: "UPDATED", data: article });
    } else {
      ApiError.badRequest(res, {
        message: error.message,
        friendlyMsg: "Bunday maqola mavjud emas",
      });
    }
  } catch (error) {
    ApiError.internal(res, {
      message: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const delArticle = await articleService.delete(req.params.id);
    if (!delArticle)
      ApiError.badRequest(res, {
        message: error.message,
        friendlyMsg: "Bunday maqola mavjud emas",
      });
    return res
      .status(200)
      .json({ message: "Article is deleted successfully", data: delArticle });
  } catch (error) {
    ApiError.internal(res, {
      message: error.message,
      friendlyMsg: "Serverda qandaydir xatolik",
    });
  }
};
