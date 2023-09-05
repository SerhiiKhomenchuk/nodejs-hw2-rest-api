/** @format */

const express = require("express");
const {
  getAll,
  getById,
  add,
  remove,
  update,
} = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", getAll);

router.get("/:Id", getById);

router.post("/", validateBody(schemas.addSchema), add);

router.delete("/:Id", remove);

router.put("/:Id", validateBody(schemas.addSchema), update);

module.exports = router;
