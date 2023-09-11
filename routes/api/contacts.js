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

const { validateBody, isValidId } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", getAll);

router.get("/:Id", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), add);

router.put("/:Id", isValidId, validateBody(schemas.addSchema), update);
router.patch(
  "/:Id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact,
);

router.delete("/:Id", isValidId, remove);

module.exports = router;
