console.log("task 1");

function sleep(sec) {
  //   let start = new Date().getTime();
  //   while (new Date().getTime() < start + sec) {
  //     console.count("Process 1");
  //   }
  console.log("START");
  setTimeout(() => {
    console.log("DONE");
  }, sec);
  console.log("END");
}

sleep(1000);

console.log("task 2");

console.log("task 3");
