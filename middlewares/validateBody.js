/** @format */

const { HttpError } = require("../helpers");

const validateBody = (schema, requiredFields) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      let errorMessage;
      console.log("error");
      if (!Object.keys(req.body).length) {
        errorMessage = requiredFields
          ? `missing field ${requiredFields.join(", ")}`
          : "missing fields";
        next(HttpError(400, errorMessage));
        return;
      }
      if (error.details[0].type === "any.required") {
        errorMessage = `missing required ${error.details[0].context.key} field`;
        next(HttpError(400, errorMessage));
        return;
      }

      errorMessage = error.message;
      next(HttpError(400, errorMessage));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
