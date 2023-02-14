const User = require("../models/User");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

// for image upload
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

// "file system" to be used in uploading image
const fs = require("fs");

const registerUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const existingUser = await User.findOne({ email }).exec();
  if (existingUser) {
    throw new Error("We already have an account with that email address.");
  }

  const user = await User.create(req.body);

  const token = generateToken(user.id, user.name);
  // 1 day in ms
  const timeLimit = 86_400_000;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + timeLimit),
  });

  res.json({
    _id: user.id,
    name: user.name,
    email: user.email,
    theme: user.theme,
    image: user.image,
    token: generateToken(user.id, user.name),
  });
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //   Find Input User from database
  const user = await User.findOne({ email }).exec();
  if (!user) {
    throw new Error("We don't have an account with that email address.");
  }

  // Check if the input password is correct
  if (await bcrypt.compare(password, user.password)) {
    const token = generateToken(user.id, user.name);
    // const token = "fake cookie";

    // 1 day in ms
    const timeLimit = 86400000;
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + timeLimit),
    });

    res.json({
      _id: user.id,
      name: user.name,
      theme: user.theme,
      image: user.image,
    });
  } else {
    throw new Error("That’s an incorrect password. Try again.");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.send("Successful logout");
});

const showUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id).select("-password -__v");
  res.json(user);
});

const editUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const user = await User.findByIdAndUpdate(id, { ...req.body });
  const updatedUser = await User.findById(id).select("-password -__v");

  res.json(updatedUser);
});

// Upload image
// file uploaded in local tmp using express-fileupload
// local file uploaded in tmp folder will be uploaded in Cloudinary
// in a created folder called "user-image-upload" which I made there
// delete the tmp file
// grab src url in json file
const uploadImage = asyncHandler(async (req, res) => {
  const image = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: "user-image-upload",
  });
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.json({ image: { src: image.secure_url } });
});

// Generate a token
const generateToken = (id, name) => {
  return jwt.sign({ id, name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_TIMELINE,
  });
};

module.exports = {
  editUser,
  registerUser,
  loginUser,
  uploadImage,
  logoutUser,
  showUser,
};
