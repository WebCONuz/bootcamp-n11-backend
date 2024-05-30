import Joi from "joi";

const userValidate = Joi.object({
  email: Joi.string().email().min(3).max(50),
  phone: Joi.string()
    .required()
    .pattern(new RegExp("^9989[012345789][0-9]{7}$"))
    .message("telefon raxam xato"),
  password: Joi.string().required().min(6).max(50),
  password2: Joi.ref("password"),
  card: Joi.string().required(),
  address: Joi.string(),
  description: Joi.string(),
  full_name: Joi.string(),
});

export default userValidate;
