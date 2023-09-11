/** @format */

const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { Id } = req.params;
  if (!isValidObjectId(Id)) {
    next(HttpError(400, `${Id} is not valid Id`));
  }
  next();
};

module.exports = isValidId;
