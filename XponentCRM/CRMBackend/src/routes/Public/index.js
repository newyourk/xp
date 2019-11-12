const express = require ('express');
const app = express ();

// ───────────────User─────────────────────────────────────────────────────────────────
const Brand = require ('./Brand');
const Comment = require ('./Comment');
const DropDowns = require ('./DropDowns');
const People = require ('./People');
const User = require ('./User');

app.use ('/brand', Brand);
app.use ('/comment', Comment);
app.use ('/dropdowns', DropDowns);
app.use ('/people', People);
app.use ('/user', User);

module.exports = app;
