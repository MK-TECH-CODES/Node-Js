const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userDB = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const userCheck = await userDB.findOne({ email });
  if (userCheck) {
    res.status(400);
    throw new Error("User already present");
  }

  //HashPassword
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);

  const user = await userDB.create({
    name,
    email,
    password: hashPassword,
  });
  res.json(user);
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const usercheck = await userDB.findOne({ email });
  if (usercheck && (await bcrypt.compare(password, usercheck.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: usercheck.name,
          email: usercheck.email,
          id: usercheck.id,
        },
      },
      process.env.ACCESS_TOKEN_SCERET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
  // res.json({ message: "Login user" });
});

const currentUser = asyncHandler(async (req, res) => {
  if (req.user) {
  }
  res.json({ message: "Current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
