const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your passsword"],
      min: 6,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/apekking/image/upload/v1674359527/avatar/Blank-Avatar_zfo6gt.png",
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
