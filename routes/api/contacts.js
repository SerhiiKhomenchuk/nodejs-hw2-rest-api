/** @format */

const express = require("express");
const {
  getAll,
  getById,
  add,
  remove,
  update,
  updateStatusContact,
} = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, getAll);

router.get("/:Id", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(schemas.addSchema), add);

router.put(
  "/:Id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  update,
);
router.patch(
  "/:Id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact,
);

router.delete("/:Id", authenticate, isValidId, remove);

module.exports = router;
