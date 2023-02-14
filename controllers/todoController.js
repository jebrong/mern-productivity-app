const asyncHandler = require("express-async-handler");
const Todo = require("../models/Todo");
const { query } = require("express");

const createTodo = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const todo = await Todo.create({ ...req.body, createdBy: id });
  res.json(todo);
});

const getAllTodo = asyncHandler(async (req, res) => {
  const { id } = req.user;

  let { urgent, favorite, finished, search, sort } = req.query;

  let queryObject = { createdBy: id };

  if (search) {
    // $regex is used to search for objs that include a portion of the search
    // ex. search = s
    queryObject.task = { $regex: search, $options: "i" };
  }

  if (urgent) {
    queryObject.urgent = urgent == "true" ? true : false;
  }
  if (favorite) {
    queryObject.favorite = favorite == "true" ? true : false;
  }
  if (finished) {
    queryObject.finished = finished == "true" ? true : false;
  }

  let todoList = Todo.find({
    ...queryObject,
  });

  if (sort) {
    const sortList = sort.split(",").join(" ");
    todoList.sort(sortList);
  } else {
    todoList.sort("-favorite -createdAt");
  }

  let sortedTodoList = await todoList;

  const urgentList = sortedTodoList.filter((todo) => {
    return todo.urgent === true;
  });

  const favoriteList = sortedTodoList.filter((todo) => {
    return todo.favorite === true;
  });

  const unfinishedList = sortedTodoList.filter((todo) => {
    return todo.finished === false;
  });

  res.json({
    sortedTodoList,
    totalTodo: sortedTodoList.length,
    totalUrgent: urgentList.length,
    totalFavorite: favoriteList.length,
    totalUnfinished: unfinishedList.length,
    totalFinished: sortedTodoList.length - unfinishedList.length,
  });
});

const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const findTodo = await Todo.findByIdAndUpdate(id, { ...req.body });
  const updatedTodo = await Todo.findById(id);

  res.json({ findTodo, updatedTodo });
});

const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedTodo = await Todo.findByIdAndDelete(id);
  res.json(deletedTodo);
});

module.exports = { createTodo, getAllTodo, updateTodo, deleteTodo };
