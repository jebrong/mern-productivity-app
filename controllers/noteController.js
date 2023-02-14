const asyncHandler = require("express-async-handler");
const Note = require("../models/Note");

const getAllNote = asyncHandler(async (req, res) => {
  const { id } = req.user;

  let { favorite, search, sort, noteId } = req.query;

  let queryObject = { createdBy: id };

  let regex = "";

  if (favorite) {
    queryObject.favorite = favorite == "true" ? true : false;
  }

  if (noteId) {
    queryObject._id = noteId;
  }

  if (search) {
    // one search value searching for notes and title
    regex = new RegExp(search, "i");
    queryObject.$and = [{ $or: [{ notes: regex }, { title: regex }] }];
  }

  let noteList = Note.find({
    ...queryObject,
  });

  if (sort) {
    const sortList = sort.split(",").join(" ");
    noteList.sort(sortList);
  } else {
    noteList.sort("-favorite -createdAt");
  }

  let sortedNoteList = await noteList;

  const favoriteList = sortedNoteList.filter((note) => {
    return note.favorite === true;
  });

  res.json({
    sortedNoteList,
    totalNote: sortedNoteList.length,
    totalFavorite: favoriteList.length,
  });
});

const createNote = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const note = await Note.create({ ...req.body, createdBy: id });
  res.json(note);
});

const updateNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const findNote = await Note.findByIdAndUpdate(id, { ...req.body });
  const updatedNote = await Note.findById(id);

  res.json({ findNote, updatedNote });
});

const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedNote = await Note.findByIdAndDelete(id);
  res.json(deletedNote);
});

module.exports = {
  getAllNote,
  createNote,
  updateNote,
  deleteNote,
};
