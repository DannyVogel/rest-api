import Joi from "joi";

export const postSchema = Joi.object({
  author: Joi.string().min(1).required(),
  title: Joi.string().min(1).required(),
  body: Joi.string().min(15).required(),
});
