const express = require ('express');
const app = express ();

const Public = require ('./public');
// const Private = require ('./private');

// app.use ('/private', Private);
app.use ('/public', Public);

module.exports = app;
