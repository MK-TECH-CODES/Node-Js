const fs = require("fs");
const path = require("path");
// D:\Node Learning\Node Learing\Data\movies.json
module.exports = (data) => {
  //   console.log(data);
  try {
    fs.writeFileSync(
      path.join(__dirname, "..", "Data", "movies.json"),
      JSON.stringify(data),
      "utf-8"
    );
  } catch (err) {
    console.log(err);
  }
};
