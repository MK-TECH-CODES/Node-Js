const http = require("http");
require("dotenv").config();

const getReq = require("./Methods/get-Request");
const postReq = require("./Methods/post-Request");
const putReq = require("./Methods/put-Request");
const deleteReq = require("./Methods/delete-Request");
let movies = require("./Data/movies.json");

const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  req.movies = movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-type", "application/json");
      res.write(
        JSON.stringify({
          title: "Not found",
          message: "404 Error is occur",
        })
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log("Server is listening");
});
