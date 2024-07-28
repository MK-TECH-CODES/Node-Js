import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";

dotenv.config();

const app = express();
// middleware
app.use(bodyParser.json());
app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});


app.listen(process.env.PORT, () => {
  console.log("Server is running in 3000");
});
