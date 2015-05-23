var express = require('express');
var app = express();

var debug = require('debug')('phonegapbuilder:index');

debug('builder has started');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/builderauthcallback', function(request, response) {
    debug(request);
  response.send('success!');
});

app.listen(app.get('port'), function() {
  debug('listening on port', app.get('port'));
});
