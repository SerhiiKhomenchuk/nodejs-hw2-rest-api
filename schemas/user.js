/** @format */

const Joi = require("joi");

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const subscriptionValues = ["starter", "pro", "business"];

const registerSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...subscriptionValues),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = { registerSchema, loginSchema, emailSchema };
