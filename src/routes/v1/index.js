const express = require("express");

const { AuthRequestValidators } = require("../../middlewares/index");
const UserController = require("../../controllers/user-controller");

const router = express.Router();
router.post(
  "/signup",
  AuthRequestValidators.validateUserAuth,
  UserController.create
);
router.delete("/delete/:userId", UserController.destroy);

router.post(
  "/signin",
  AuthRequestValidators.validateUserAuth,
  UserController.signIn
);

router.get("/isAuthenticated", UserController.isAuthenticated);

router.get(
  "/isAdmin",
  AuthRequestValidators.validateIsAdminRequest ,
  UserController.isAdmin
);
module.exports = router;
