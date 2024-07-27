const { log } = require("console");
const minimist = require("minimist");

// log(process.argv.slice(2)[0]);

// process.argv.forEach((ele, index) => {
//   console.log(`${index} - ${ele}`);
// });

//  node arguments.js --name=mukesh

const data = minimist(process.argv.splice(2));
log(data.name);
