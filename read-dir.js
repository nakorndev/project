var fs = require('fs');

var args = process.argv;
var dir = args[2];

fs.readdir(dir, function (err, files) {
  if (err) {
    throw err;
  }
  files.forEach(function (file) {
    console.log(file);
  });
});
