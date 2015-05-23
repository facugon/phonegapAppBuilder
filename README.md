# node phonegap app builder

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

## Create phonegap account

configurar cuenta (https://build.phonegap.com/people/edit#show-client)    
vincular con cuenta de github    
crear app (necesita una url , Heroku)    
registrar la app en settings de phonegap (obtener el client_id y client_secret)    
obtener un auth token    
usarlo para vincular la app creada previamente con la cuenta de phonegap para poder buildear     


**we need to get**

> client_id    
> client_secret    
> user auth_token    

```sh
curl -X POST https://build.phonegap.com/authorize?client_id=abcdef&client_secret=123456&auth_token=789hij    
```

**to obtain**

> app_access_token   

```sh
GET https://build.phonegap.com/api/v1/me?access_token=123456
```