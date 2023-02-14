const express = require("express");
const router = express.Router();
const { authorize } = require("../middleware/authMiddleware");

const {
  getAllNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

router.route("/").get(authorize, getAllNote).post(authorize, createNote);
router.route("/:id").patch(authorize, updateNote).delete(authorize, deleteNote);

module.exports = router;
