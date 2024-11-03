var program = require('commander');

program
  .version('0.0.1')
  .option('-d, --dir [dir]', 'directory to read')
  .parse(process.argv);

var fs = require('fs');

var dir = program.dir;

if (dir) {
  fs.readdir(dir, function (err, files) {
    if (err) {
      throw err;
    }
    files.forEach(function (file) {
      console.log(file);
    });
  });
} else {
  console.log('Error: Please specify the directory using -d or --dir');
}

