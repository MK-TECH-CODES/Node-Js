console.log("Start");
// function asyncTask(cb) {
//   console.log("Running");
//   setTimeout(cb, 0);
// }

// asyncTask(() => {
//   console.log(name);
// });
// console.log("End");
// const name = "s=datt";

function task(cb) {
  setTimeout(() => {
    cb();
  }, 0);
}

// task((err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Data", data);
//   }
// });

function makeapi(cb) {
  setTimeout(() => {
    console.log("This is data");
  }, 0);
}

makeapi(() => {
  makeapi(() => {
    makeapi(() => {});
  });
});
