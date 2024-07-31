const express = require("express");
require("dotenv").config();

// Routes
const contacts = require("./routes/contactRoute.js");
const userroute = require("./routes/userRoute.js");
//Custom middleware
const errorhandler = require("./middleware/errorhandler");
// ConnectDB
const connectDb = require("./config/dbConnection");

//use the express framework
const app = express();
//DB Setup
connectDb();

// user post and server access it (JSON) Middlware
app.use(express.json());

// Routes
app.use("/api/contacts", contacts);
app.use("/api/users", userroute);

// Custom middleeare
app.use(errorhandler);
app.listen(process.env.PORT, () => {
  console.log(`server is running in 3000`);
});
