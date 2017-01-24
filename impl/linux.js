var exec = require('child_process').exec;

exports.setTime = function(date) {
  return new Promise(function(resolve, reject) {
    var cmd = `date --set @${date.getTime() / 1000}`;

    exec(cmd, function(error, stdout, stderr) {
      if(error) reject(error);
      if(stderr) reject(stderr);
      resolve();
    });
  });
}