const express = require ('express');
const app = express ();

const Public = require ('./public');
// const Private = require ('./private');

app.use ('/public', Public);
// app.use ('/private', Private);

module.exports = app;
