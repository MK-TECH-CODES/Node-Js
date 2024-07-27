// Error Objects

const error = new Error("Something is written");

const { resolve } = require("path");
// console.log(error.stack);
// console.log(error.message);

// throw new Error("Iam error object");

const { customerror } = require("./customerror");
const { rejects } = require("assert");

// throw new customerror("This is new Error message");

// Try and Catch
// try {
//   dosomething();
// } catch (e) {
//   console.log("Error : ", e);
// }

function dosomething() {
  const data = fetch("localhost:3000/api");
  //   console.log("Function checked");

  //   const data = "checked";
  //   return data;
}

// Uncaught exceptions

// process.on("uncaughtException", (err) => {
//   console.log("This the error", err) ;
//   process.exit(1);
// });

// Exceptions with promise

// const promise = new Promise((resolve, rejects) => {
//   if (true) {
//     resolve(dosomething());
//   } else {
//     rejects(dosomething());
//   }
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log("Error ", err);
//   });

// Exception with async and wait

const somefunction = async () => {
  try {
    await dosomething();
  } catch (err) {
    // console.log("Error :", error);
    throw new customerror(err);
  }
};

somefunction();
