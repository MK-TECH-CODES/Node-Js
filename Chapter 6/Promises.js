// const promise = new Promise((resolve, reject) => {
//   console.log("Async task execution");

//   if (false) {
//     const data = {
//       data: "v1",
//       price: 100,
//     };
//     resolve(data);
//   } else {
//     throw "err";
//   }
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log("Passed");
//   });

// let p = Promise.resolve("execution done");
// // let p1 = Promise.reject("not execution done");
// p.then((val) => {
//   console.log(val);
// });

// let p = Promise.resolve("done");

// p.then((val) => {
//   console.log(val);
//   return "Done2";
// })
//   .then((val) => {
//     console.log(val);
//     return "Done3";
//   })
//   .then((val) => {
//     console.log(val);
//     return "Done3";
//   })
//   .then((val) => {
//     console.log(val);
//     return "Done3";
//   })
//   .then((val) => {
//     console.log(val);
//     return "Done3";
//   });

const makeapi = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is done in " + time);
    }, time);
  });
};

// makeapi(2000).then((val) => {
//   console.log(val);
// });

let multi = [makeapi(1000), makeapi(2000), makeapi(500)];

Promise.all(multi).then((val) => {
  console.log(val);
});

// Geting the first
Promise.race(multi).then((val) => {
  console.log(val);
});
