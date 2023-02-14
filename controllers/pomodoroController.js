const asyncHandler = require("express-async-handler");
const Pomodoro = require("../models/Pomodoro");
const { query } = require("express");

const createPomodoro = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const pomodoro = await Pomodoro.create({ ...req.body, createdBy: id });
  res.json(pomodoro);
});

const getAllPomodoro = asyncHandler(async (req, res) => {
  const { id } = req.user;

  let { favorite, search, sort, pomoId } = req.query;

  let queryObject = { createdBy: id };

  if (search) {
    // $regex is used to search for objs that include a portion of the search
    // ex. search = s
    queryObject.title = { $regex: search, $options: "i" };
  }
  // searching single pomodor by its id
  if (pomoId) {
    queryObject._id = pomoId;
  }

  if (favorite) {
    queryObject.favorite = favorite == "true" ? true : false;
  }

  let pomodoroList = Pomodoro.find({
    ...queryObject,
  });

  if (sort) {
    const sortList = sort.split(",").join(" ");
    pomodoroList.sort(sortList);
  } else {
    pomodoroList.sort("-favorite -createdAt");
  }

  let sortedPomodoroList = await pomodoroList;

  const favoriteList = sortedPomodoroList.filter((pomodoro) => {
    return pomodoro.favorite === true;
  });

  res.json({
    sortedPomodoroList,
    totalPomodoro: sortedPomodoroList.length,
    totalFavorite: favoriteList.length,
  });
});

const updatePomodoro = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const findPomodoro = await Pomodoro.findByIdAndUpdate(id, { ...req.body });
  const updatedPomodoro = await Pomodoro.findById(id);

  res.json({ findPomodoro, updatedPomodoro });
});

const deletePomodoro = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedPomodoro = await Pomodoro.findByIdAndDelete(id);
  res.json(deletedPomodoro);
});

module.exports = {
  createPomodoro,
  getAllPomodoro,
  updatePomodoro,
  deletePomodoro,
};
