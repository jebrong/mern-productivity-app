const express = require("express");
const router = express.Router();

const {
  createTodo,
  getAllTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const { authorize } = require("../middleware/authMiddleware");

router.route("/").get(authorize, getAllTodo).post(authorize, createTodo);
router.route("/:id").patch(authorize, updateTodo).delete(authorize, deleteTodo);

module.exports = router;
