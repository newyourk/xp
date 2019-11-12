const express = require ('express');
const app = express ();

// ───────────────Product─────────────────────────────────────────────────────────────────
const Accessory = require ('../../modules/Product/routes/Accessory');
const Cake = require ('../../modules/Product/routes/Cake');
const Category = require ('../../modules/Product/routes/Category');
const DoubleCake = require ('../../modules/Product/routes/DoubleCake');
const Product = require ('../../modules/Product/routes/Product');
const Readyproduct = require ('../../modules/Product/routes/Readyproduct');
const Tag = require ('../../modules/Product/routes/Tag');
const Taste = require ('../../modules/Product/routes/Taste');
const ThemeTable = require ('../../modules/Product/routes/ThemeTable');

app.use ('/accessory', Accessory);
app.use ('/cake', Cake);
app.use ('/category', Category);
app.use ('/doublecake', DoubleCake);
app.use ('/product', Product);
app.use ('/readyproduct', Readyproduct);
app.use ('/tag', Tag);
app.use ('/taste', Taste);
app.use ('/themetable', ThemeTable);

// ───────────────User─────────────────────────────────────────────────────────────────
// const Address = require ('../../modules/User/routes/Address');
const City = require ('../../modules/User/routes/City');
const Customer = require ('../../modules/User/routes/Customer');
const Employee = require ('../../modules/User/routes/Employee');
const Province = require ('../../modules/User/routes/Province');
const Auth = require ('../../modules/User/routes/SignInOrOut/');

// app.use ('/address', Address);
app.use ('/city', City);
app.use ('/customer', Customer);
app.use ('/employee', Employee);
app.use ('/province', Province);
app.use ('/auth', Auth);

module.exports = app;
