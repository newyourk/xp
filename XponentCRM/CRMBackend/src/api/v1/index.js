const express = require ('express');
const app = express ();

const mainRoutes = require ('../../routes/');

app.use ('/crm', mainRoutes);

module.exports = app;
