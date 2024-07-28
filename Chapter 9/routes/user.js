import express from "express";
import { v4 as uuid } from "uuid";

const router = express.Router();

let users = [
  {
    user: "John",
    age: 25,
    id: "669e0c06-1177-48f1-b71f-1d00aa57edd7",
  },
  {
    user: "John",
    age: 26,
    id: "342621cf-fc83-4a81-bc9d-50128aa270d0",
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(JSON.stringify(users));
});

router.post("/", (req, res) => {
  //   users.push(req.body);
  const user = req.body;
  const userId = uuid();
  const data = { ...user, id: userId };
  users.push(data);
  res.json({ status: "Success", data: users });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const data = users.find((user) => {
    return user.id === id;
  });
  res.json({ data: data });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);
  res.json({ users: users });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const { user, age } = req.body;
  const userToFind = users.find((user) => user.id === id);
  if (user) {
    userToFind.user = user;
  }
  if (age) {
    userToFind.age = age;
  }

  res.json({ user: users });
});

export default router;
