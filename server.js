var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 4567));

app.use('/', express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

/*
var twemoji = require('./twemoji.json');
var fs = require('fs');
var p;
for (p in twemoji) {
  var result = null;
  if (p.match(/-/i)) {
    result = p.replace(/-/i, ';&#x');
    result = '<li>&#x' + result + ';</li>\n';
  } else {
    result = '<li>&#x' + p + ';</li>\n';
  }
  // console.log('key', '&#x'+p, ' match', p.replace(/-/i, ';&#x'));
  console.log(result);

  fs.appendFile('replace_twemoji.txt', result ,'utf8', function (err) {
      console.log(err);
  });
}

twemoji = null;
*/
