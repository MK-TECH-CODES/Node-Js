module.exports = async (request) => {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });
 
    request.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });

    request.on("error", (err) => {
      reject(err);
    });
  });
};
