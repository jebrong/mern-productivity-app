const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const authorize = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new Error("Not authorized!");
  }

  // decodes token to see contents and gets the id
  const { id } = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(id).select("-password");

  if (!user) {
    throw new Error("Not authorized");
  }

  req.user = { id };

  next();
});

module.exports = {
  authorize,
};
