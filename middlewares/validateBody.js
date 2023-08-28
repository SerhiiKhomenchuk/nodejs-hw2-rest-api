/** @format */

const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      let errorMessage;
      switch (req.method) {
        case "PUT":
          errorMessage = "missing fields";
          break;
        case "POST":
          errorMessage = "missing required name field";
          break;
        default:
          errorMessage = error.message;
          break;
      }
      next(HttpError(400, errorMessage));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
