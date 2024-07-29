var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("user", { title: "User Page", users: "New User" });
});

module.exports = router;
