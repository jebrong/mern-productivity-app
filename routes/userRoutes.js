const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  uploadImage,
  logoutUser,
  showUser,
  editUser,
} = require("../controllers/userController");

const { authorize } = require("../middleware/authMiddleware");

router.route("/register").post(registerUser);
router.route("/register/upload").post(uploadImage);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/").get(authorize, showUser);
router.route("/edit").patch(authorize, editUser);

module.exports = router;
