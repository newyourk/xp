var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var cors = require ('cors');

//set up API
var api = require ('../src/api/v1');

//requiring Midlewares
const errorHandling = require ('../src/middlewares/errorHandling');
const auth = require ('../src/middlewares/Authentication');

// set up app as express
const app = express ();

app.use (bodyParser.json ());

app.use (cors ());

app.get ('/', (req, res) => {
  res.json ({
    message: 'Welcome!',
  });
});

app.use ('/static', express.static (path.join (__dirname, 'public')));
app.use (bodyParser.json ());

//initialize routes
app.use ('/api/v1', api);

//set up errorHndler Midlewares
app.use (errorHandling);

module.exports = app;
