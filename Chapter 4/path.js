const path = require("path");
const fs = require("fs");
const { log } = require("console");
const fspromis = require("fs").promises;
const filepath = "D:/Node Learning/Node Learing/sample.txt";

// console.log(path.dirname(filepath));
// console.log(path.basename(filepath));
// console.log(path.extname(filepath));

// console.log(__dirname);

// console.log(__filename);

// console.log(path.join(path.dirname(filepath), path.basename(filepath)));
// console.log(fs);

// fs.readFile(filepath, "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log(data);
//   }
// });

// const fileread = async () => {
//   try {
//     const data = await fspromis.readFile(filepath, "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// try {
//   const data = fs.readFileSync(filepath, "utf-8");
//   //   console.log(1, data);

//   const textpath = path.join(__dirname, "sample2.txt");
//   fs.writeFile(textpath, data, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("write success");
//       fs.readFile(textpath, "utf-8", (err, data2) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data2);
//         }
//       });
//     }
//   });
// } catch (err) {
//   console.log(err);
// }

// console.time("fileread()");
// console.log(fileread());
// console.timeEnd("fileread()");

const textpath = path.join(__dirname, "sample2.txt");

const writeFile = async () => {
  try {
    const data = await fspromis.readFile(textpath, "utf-8");
    await fspromis.writeFile(textpath, filepath);
    await fspromis.appendFile(textpath, filepath);
    await fspromis.appendFile(textpath, data);
    await fspromis.rename(textpath, path.join(__dirname, "new.txt"));
    const data2 = await fspromis.readFile(
      path.join(__dirname, "new.txt"),
      "utf-8"
    );
    console.log(data2);
  } catch (err) {
    console.log(err);
  }
};

writeFile();
