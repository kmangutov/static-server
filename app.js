var express = require('express');
var app = express();
var argv = require('yargs')
  .default('d', '.')
  .default('p', 80)
  .argv;

var targetDir = argv.d;
var oneDay = 86400000;

console.log("Launching static server");
console.log("\troot: " + argv.d);
console.log("\tport: " + argv.p);

app.use(express.compress());
app.use(express.static(targetDir, {maxAge: oneDay}));

app.listen(argv.p);