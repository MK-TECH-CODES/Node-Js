module.exports = (req, res) => {
  //   console.log(req.url);
  //   console.log(req.url.lastIndexOf("/"));
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  //   console.log(baseUrl);
  let uuid = req.url.split("/")[3];
  const regexv4 = new RegExp(/[0-9]{1,}$/i);
  //   console.log(regexv4.test(uuid));
  //   console.log(uuid);
  if (req.url === "/api/movies") {
    res.status = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else if (!regexv4.test(uuid)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Valitation Failed",
        message: "UUID not found",
      })
    );
  } else if (baseUrl === "/api/movies/" && regexv4.test(uuid)) {
    res.status = 200;
    res.setHeader("Content-Type", "application/json");
    let filtermovie = req.movies.filter((mov) => {
      return mov.id === +uuid;
    });
    if (filtermovie.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(filtermovie));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(
        JSON.stringify({ title: "Not found", message: "404 Error is occur" })
      );
      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Not found",
        message: "404 Error is occur",
      })
    );
  }
};
