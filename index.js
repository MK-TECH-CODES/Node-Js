const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", (req, res) => {
  res.json({ message: "Get the user" });
});

app.get("/users/:id", (req, res) => {
  res.json({ message: `Get user by id ${req.params.id}` });
});

app.post("/users", (req, res) => {
  res.json({ message: "Creating new users" });
});

app.put("/users/:id", (req, res) => {
  res.json({ message: "Update user by id" });
});

app.delete("/users/:id", (req, res) => {
  res.json({ message: "Delete users by id" });
});

app.listen(process.env.PORT, () => {
  console.log(`server is listing in 3000`);
});
