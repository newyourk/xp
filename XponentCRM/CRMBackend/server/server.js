// ─── CONFIG SERVER VARIABLES──────────────────────────────────────────────────────────────────────
process.env.NODE_CONFIG_DIR = __dirname + '/config';

const config = require ('config');

const level = config.get ('level');
const port_config = config.get ('port');
const dbname = config.get ('dbname');

console.log ('*** Level: ' + level + ' ***');
console.log ('*** DataBase: ' + dbname + ' ***');

// ─── SET SERVER ──────────────────────────────────────────────────────────────────────
const fs = require ('fs');
const app = require ('../app/app');
const debug = require ('debug') ('test4:server');
const http = require ('http');
const https = require ('https');

// Get port from environment and store in Express.
var port = normalizePort (process.env.PORT || port_config);
app.set ('port', port);

// Create HTTP server.
var server = http.createServer (app);

// Create HTTPS server.
// var server = https.createServer (credentials, app);

// Listen on provided port, on all network interfaces.
server.listen (port);
server.on ('error', onError);
server.on ('listening', onListening);

// Normalize a port into a number, string, or false.
function normalizePort (val) {
  var port = parseInt (val, 10);

  if (isNaN (port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// Event listener for HTTP server "error" event
function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error (bind + ' requires elevated privileges');
      process.exit (1);
      break;
    case 'EADDRINUSE':
      console.error (bind + ' is already in use');
      process.exit (1);
      break;
    default:
      throw error;
  }
}

//Event listener for HTTP server "listening" event.
function onListening () {
  var addr = server.address ();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug ('Listening on ' + bind);
  console.log ('Server listening on port ' + app.get ('port'));
}
