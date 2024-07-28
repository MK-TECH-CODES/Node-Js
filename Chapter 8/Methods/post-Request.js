const requestBodyparser = require("../util/body-parser");
const writeTofile = require("../util/write-file");
const user_id = () => {
  return Math.floor(Math.random() * 100) + 1;
};

module.exports = async (req, res) => {
  if (req.url === "/api/movies") {
    try {
      let body = await requestBodyparser(req);
      //   console.log("Requested Body :", body);

      body.id = user_id();
      req.movies.push(body);

      writeTofile(req.movies);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Success", id: body.id }));
    } catch (err) {
      console.error("Error parsing request body:", err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Internal Server Error" }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
};
