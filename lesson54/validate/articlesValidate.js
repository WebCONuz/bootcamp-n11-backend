import Joi from "joi";

const userValidate = Joi.object({
  title: Joi.string().required(),
  text: Joi.string().required(),
  description: Joi.string(),
  author: Joi.string().required(),
});

export default userValidate;
