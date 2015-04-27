var express = require('express');
var app = express();
var argv = require('yargs')
  .default('d', '.')
  .default('p', 80)
  .argv;

var targetDir = argv.d;

console.log("Launching static server");
console.log("\troot: " + argv.d);
console.log("\tport: " + argv.p);

app.use(express.static(targetDir));

app.listen(argv.p);