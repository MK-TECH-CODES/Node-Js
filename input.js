const readline = require("readline");
const prompt = require("prompt-sync")();

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// read.question("what is your name?", (name) => {
//   console.log("hi ", name);
//   read.close();
// });

const name = prompt("Enter the name ?");
console.log(name);
