import Joi from "joi";

const userValidate = Joi.object({
  title: Joi.string().email().min(3).max(100),
  text: Joi.string().email().min(3),
  description: Joi.string(),
  author_id: Joi.string().required(),
});

export default userValidate;
