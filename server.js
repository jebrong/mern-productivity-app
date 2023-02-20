require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const path = require("path");
const root = path.join(__dirname, "build");

// const cors = require("cors");
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );

const userRouter = require("./routes/userRoutes");
const todoRouter = require("./routes/todoRoutes");
const noteRouter = require("./routes/noteRoutes");
const pomodoroRouter = require("./routes/pomodorRoute");
const connectDB = require("./config/db");

// for uploading photos
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// for uploading temporary  photos
app.use(fileUpload({ useTempFiles: true }));

app.use(express.json());
app.use(cookieParser());

app.use(express.static("build"));

const { errorHandler } = require("./middleware/errorMiddleware");

app.use("/api/user", userRouter);
app.use("/api/todo", todoRouter);
app.use("/api/note", noteRouter);
app.use("/api/pomodoro", pomodoroRouter);

// for refreshes
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log("Server is listening on port " + process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
