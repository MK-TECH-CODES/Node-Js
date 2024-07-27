const ProgressBar = require("progress");
const chalk = require("chalk");
// bar create
const bar = new ProgressBar("downloading [:bar] :rate/bps :etas", {
  total: 20,
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 10);

console.log(chalk.green("This is green"));
console.log(chalk.blueBright("This is green"));
