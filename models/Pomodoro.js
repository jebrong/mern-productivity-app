const mongoose = require("mongoose");

const pomodoroSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Pomodoro", pomodoroSchema);
