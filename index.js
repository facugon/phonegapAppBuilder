var express = require('express');
var app = express();
var pgclient = require('phonegap-build-api');

//var debug = require('debug')('phonegapbuilder:index');
var debug = console.log;
var appsCounter = 0 ;

debug('builder has started');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/builderauthcallback', function(req, res) {
    debug(req.params);
    res.send('success!');
});

app.get('/apps', function(req,res){
    pgclient.auth({ token: 'uCSLznW5FVy78ALy2sne' },
        function(e,api){
            if(e)
            {
                debug(e);
                res.send(e);
            }
            else
            {
                api.get('/apps',function(e,data){
                    if(e)
                    {
                        debug(e);
                        res.send(e);
                    }
                    else
                    {
                        debug(data);
                        res.send(data);
                    }
                });
            }
        });
});

var appCounter = 1 ;

app.get('/build',function(req,res){

    pgclient.auth({ token: 'uCSLznW5FVy78ALy2sne' },
    //pgclient.auth({ username: process.env.PG_CLIENT_ID, password: process.env.PG_CLIENT_SECRET }, 
    function(e, api) {
        if(e)
        {
            debug(e);
            res.send(e);
        }
        else
        {
            appCounter++;
            var options = {
                form: {
                    data: {
                        private: false,
                        title: 'pgDemoApp' + appCounter,
                        create_method: 'remote_repo',
                        repo: 'https://github.com/facugon/phonegapAppBuilder'
                    }
                }
            };

            api.post('/apps', options, function(e, data) {
                if(e)
                {
                    debug('error:', e);
                    debug('data:', data);
                    res.send(e);
                }
                else
                {
                    debug('data:', data);
                    res.send(data);
                }
            });
        }
    });

});

app.listen(app.get('port'), function() {
    debug('listening on port', app.get('port'));
});
