const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add user name"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: [true, "Email already present."],
    },
    password: {
      type: String,
      required: [true, "Please add Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
