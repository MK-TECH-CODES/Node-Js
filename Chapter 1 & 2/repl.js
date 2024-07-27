// REPL - Read Evaluate Print Loop

const { log } = require("console");
const repl = require("repl");

const local = repl.start("$");

local.on("exit", () => {
  log("REPL exit.");
  process.exit();
});

// node console in start form
