/** @format */
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const contactsShema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      match: /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

contactsShema.post("save", handleMongooseError);

const Contact = model("contact", contactsShema);
module.exports = Contact;
