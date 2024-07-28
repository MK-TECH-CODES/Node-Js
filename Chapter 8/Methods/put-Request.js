const requestBodyparser = require("../util/body-parser");
const writeTofile = require("../util/write-file");

module.exports = async (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  //   console.log(baseUrl);
  let uuid = req.url.split("/")[3];
  const regexv4 = new RegExp(/[0-9]{1,}$/i);
  if (!regexv4.test(uuid)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Valitation Failed",
        message: "UUID not found",
      })
    );
  } else if (baseUrl === "/api/movies/" && regexv4.test(uuid)) {
    try {
      let body = await requestBodyparser(req);
      const index = req.movies.findIndex((movie) => {
        //   console.log(movie);
        return movie.id === +uuid;
      });

      if (index === -1) {
        res.statusCode = 404;
        res.write(
          JSON.stringify({ title: "Not found", message: "404 Error is occur" })
        );
        res.end();
      } else {
        req.movies[index] = { id: +uuid, ...body };
        writeTofile(req.movies);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            title: "Success",
            data: JSON.stringify(req.movies[index]),
          })
        );
      }
    } catch (err) {
      console.log(err);
      res.statusCode = 404;
      res.write(
        JSON.stringify({ title: "Not found", message: "404 Error is occur" })
      );
      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
};
