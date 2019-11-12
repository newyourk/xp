var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');

//set up API
var api = require ('../src/api/v1');

//requiring Midlewares
const errorHandling = require ('../src/components/shared/middlewares/errorHandling');
const user = require ('../src/components/main/modules/User/controllers/Customer')
  .CheckCustomerPhoneNumber;
const auth = require ('../src/components/shared/middlewares/Authentication');
// set up app as express
const app = express ();

app.use (bodyParser.json ());

app.post ('/auth', (req, res) => {
  user (req.body)
    .then (result => {
      // console.log (result);
      const token = auth (result, res);
      res.status (202).send (token);
    })
    .catch (err => res.status (400).send (err.message));
});

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
