const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const signAccessToken = asyncHandler(async (id, name) => {
  return jwt.sign({ id, name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_TIMELINE,
  });
});

const verifyAccessToken = asyncHandler(async () => {
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
});

const signRefreshToken = asyncHandler(async (id, name) => {
  return jwt.sign({ id, name }, process.env.JWT_SECRET, {
    expiresIn: "1y",
  });
});

const attachCookiesToResponse = asyncHandler(async ({ res, user }) => {
  const token = signAccessToken(user);

  const time = 86400000;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + time),
    secure: true,
  });

  res.json({ user });
});

module.exports = { signAccessToken, verifyAccessToken, signRefreshToken };
