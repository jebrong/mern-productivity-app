const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: false,
    },
    urgent: {
      type: Boolean,
      default: false,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    finished: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
