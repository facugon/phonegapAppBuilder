var express = require('express');
var app = express();

//var debug = require('debug')('phonegapbuilder:index');
var debug = console.log;

debug('builder has started');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/builderauthcallback', function(request, response) {
    debug(request.params);
  response.send('success!');
});

app.listen(app.get('port'), function() {
  debug('listening on port', app.get('port'));
});
