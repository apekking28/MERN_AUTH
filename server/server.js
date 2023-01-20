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

    const PORT = 8080;
    app.listen(PORT, () => {
      console.log("server is active...");
    });
  }
);

// mw

// route
