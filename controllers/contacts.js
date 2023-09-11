/** @format */

const Contact = require("../models/contact");

const ctrlWrapper = require("../helpers/ctrlWrapper");

const { HttpError } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Contact.find();

  res.json(result);
};

const getById = async (req, res) => {
  const result = await Contact.findById(req.params.Id);

  if (result === null) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const remove = async (req, res) => {
  const result = await Contact.findByIdAndRemove(req.params.Id);
  if (result === null) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const update = async (req, res) => {
  const result = await Contact.findByIdAndUpdate(req.params.Id, req.body, {
    new: true,
  });
  if (result === null) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const result = await Contact.findByIdAndUpdate(req.params.Id, req.body, {
    new: true,
  });
  if (result === null) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  remove: ctrlWrapper(remove),
  update: ctrlWrapper(update),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
