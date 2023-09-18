/** @format */

const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middlewares");

const schema = require("../../schemas/user");

const router = express.Router();

// signup
router.post("/register", validateBody(schema.registerSchema), ctrl.register);

// signin
router.post("/login", validateBody(schema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
