require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    // origin: true,
    credentials: true,
  })
);

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

const { errorHandler } = require("./middleware/errorMiddleware");

app.use(express.static("build"));

app.use("/api/user", userRouter);
app.use("/api/todo", todoRouter);
app.use("/api/note", noteRouter);
app.use("/api/pomodoro", pomodoroRouter);

// error
app.all("*", (req, res) => {
  res.status(404).json({
    message: "Page not found.",
  });
});

app.use(errorHandler);

app.get("/test", (req, res) => {
  res.json({ test: "true" });
});

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
