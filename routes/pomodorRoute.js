const express = require("express");
const router = express.Router();
const { authorize } = require("../middleware/authMiddleware");

const {
  createPomodoro,
  getAllPomodoro,
  updatePomodoro,
  deletePomodoro,
} = require("../controllers/pomodoroController");

router
  .route("/")
  .get(authorize, getAllPomodoro)
  .post(authorize, createPomodoro);
router
  .route("/:id")
  .patch(authorize, updatePomodoro)
  .delete(authorize, deletePomodoro);

module.exports = router;
