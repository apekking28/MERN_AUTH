const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

// db
mongoose.set("strictQuery", true);
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("db connected");

    const PORT = 8000;
    app.listen(PORT, () => {
      console.log("server is active...");
    });
  }
);

// mw
app.use(express.json());
express.urlencoded({ extended: true });
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// route
app.use(userRoutes);
app.use(uploadRoutes);
