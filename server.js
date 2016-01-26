const fs = require('fs');
var readableStream = fs.createReadStream('npm_memo.txt', {encoding: 'utf-8', bufferSize: 1});
readableStream.on('data', function(data) {
  console.log('data', data);
});
readableStream.on('end', function() {
  console.log('end');
});
