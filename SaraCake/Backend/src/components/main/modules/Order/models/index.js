const type = require ('sequelize');
const sequelize = require ('../../../../../../server/database/dbconnection');

var Discount = require ('./Discount');
var Factor = require ('./Factor');
var Order = require ('./Order');
var Payement = require ('./Payement');
var ProductOrders = require ('./ProductOrders');
var Shipping = require ('./Shipping');

module.exports = {
  Discount,
  Factor,
  Order,
  Payement,
  ProductOrders,
  Shipping,
};
