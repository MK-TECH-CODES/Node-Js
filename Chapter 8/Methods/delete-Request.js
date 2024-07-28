const writeFile = require("../util/write-file");

module.exports = (req, res) => {
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  const regex4v = new RegExp(/[0-9]{1,}$/i);
  let uuid = req.url.split("/")[3];
  if (!regex4v.test(uuid)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Valitation Failed",
        message: "UUID not found",
      })
    );
  } else if (baseUrl === "/api/movies/" && regex4v.test(uuid)) {
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
      req.movies.splice(index, 1);
      writeFile(req.movies);
      res.writeHead(204, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Deleted success", data: req.movies }));
    }
  }
};
