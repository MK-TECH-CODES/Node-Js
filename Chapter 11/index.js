const express = require("express");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();
const multer = require("multer");

const router = express.Router();
const app = express();

// Built-In Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data
app.use("/static", express.static(path.join(__dirname, "public"))); // For serving static files

// Application-Level Middleware
const LoggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} --- request [${req.method}] [${req.url}]`);
  next();
};
app.use(LoggerMiddleware);

// Third-Party Middleware
app.use(logger("dev"));

// Router-Level Middleware
const fakeAuth = (req, res, next) => {
  const userstatus = true;
  if (userstatus) {
    console.log("Userstatus is:", userstatus);
    next();
  } else {
    res.status(401);
    next(new Error("User Not Found"));
  }
};

router.use(fakeAuth);
router.route("/").get(getUser).post(createUser);
app.use("/api/users", router);

// Route Handlers
function getUser(req, res) {
  console.log(path.join(__dirname, "public", "uploads"));
  res.json({ userstatus: "Getting all the users" });
}

function createUser(req, res) {
  console.log(req.body);
  res.json({ userstatus: "Create the users" });
}

// Error Handling Middleware
const errorHandle = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  const errorResponse = {
    title: "",
    message: err.message,
  };

  switch (statusCode) {
    case 401:
      errorResponse.title = "Unauthorized";
      break;
    case 404:
      errorResponse.title = "Not Found";
      break;
    case 500:
    default:
      errorResponse.title = "Server Error";
      break;
  }

  res.json(errorResponse);
};

// Multer setup for file uploads
const upload = multer({ dest: "D:/Node Learning/Node Learing/public/uploads" });

// File upload route
app.post(
  "/upload",
  upload.single("image"),
  (req, res) => {
    res.send(req.file);
  },
  (err, req, res, next) => {
    res.status(400).send({ err: err.message });
  }
);

// Catch-all route for undefined paths
app.all("*", (req, res, next) => {
  res.status(404);
  next(new Error("Not the correct path"));
});

// Error handling middleware should be defined last
app.use(errorHandle);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
