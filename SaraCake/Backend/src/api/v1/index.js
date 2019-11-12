const express = require ('express');
const app = express ();

const mainRoutes = require ('../../components/main/routes');

app.use ('/main', mainRoutes);

module.exports = app;
