const Sequelize = require ('sequelize');
const sequelize = require ('../../../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────── Product ─────
const Accessory = require ('../../Product/models/Accessory');
const Cake = require ('../../Product/models/Cake');
const Category = require ('../../Product/models/Category');
const DoubleCake = require ('../../Product/models/DoubleCake');
const Product = require ('../../Product/models/Product');
const ReadyProduct = require ('../../Product/models/ReadyProduct');
const Tag = require ('../../Product/models/Tag');
const Taste = require ('../../Product/models/Taste');
const ThemeTable = require ('../../Product/models/ThemeTable');

// ───────────────────────────────────────────────────────────── User ─────────
const Address = require ('../../User/models/Address');
const City = require ('../../User/models/City');
const Customer = require ('../../User/models/Customer');
const Employee = require ('../../User/models/Employee');
const Province = require ('../../User/models/Province');
const SignupCode = require ('../../User/models/SignupCode');
const UserKey = require ('../../User/models/UserKey');

// ───────────────────────────────────────────────────────────── Order ─────────
const Discount = require ('../../Order/models/Discount');
const Factor = require ('../../Order/models/Factor');
const Order = require ('../../Order/models/Order');
const Payement = require ('../../Order/models/Payement');
const Shipping = require ('../../Order/models/Shipping');

const CakeOrder = require ('../../Order/models/ProductOrders/CakeOrder');
const DoubleCakeOrder = require ('../../Order/models/ProductOrders/DoubleCakeOrder');
const ReadyProductOrder = require ('../../Order/models/ProductOrders/ReadyProductOrder');
const ThemeTableOrder = require ('../../Order/models/ProductOrders/ThemeTableOrder');

//
// ─── RELATIONS ───────────────────────────────────────────────────────────────
//

// ───────────────────────────────────────────────────────────── Category ─────
Category.hasMany (Product, {
  foreignKey: {
    name: 'category_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

Category.hasMany (Tag, {
  foreignKey: {
    name: 'category_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

// ───────────────────────────────────────────────────── Product ──────────────

Product.belongsTo (Category, {
  foreignKey: {
    name: 'category_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

Product.hasMany (Cake, {
  foreignKey: {
    name: 'product_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

Product.hasMany (DoubleCake, {
  foreignKey: {
    name: 'product_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

Product.hasMany (ThemeTable, {
  foreignKey: {
    name: 'product_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

Product.hasMany (ReadyProduct, {
  foreignKey: {
    name: 'product_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

// ───────────────────────────────────────────────────── Cake ──────────────
Cake.belongsTo (Product, {
  foreignKey: {
    name: 'product_id',
    allowNull: false,
  },
  constraints: false,
  onUpdate: 'CASCADE',
});

Cake.belongsTo (ThemeTable, {
  foreignKey: {
    name: 'themetable_id',
    allowNull: true,
  },
  onUpdate: 'CASCADE',
});

// ───────────────────────────────────────────────────────────── DoubleCake ─────

DoubleCake.belongsTo (Product, {
  foreignKey: {
    name: 'product_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

// ───────────────────────────────────────────────────────────── ReadyProduct ─────

ReadyProduct.belongsTo (Product, {
  foreignKey: {
    name: 'product_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

// ───────────────────────────────────────────────────────────── ThemeTable ─────

ThemeTable.belongsTo (Product, {
  foreignKey: {
    name: 'product_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

ThemeTable.hasMany (Cake, {
  foreignKey: {
    name: 'themetable_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

// ───────────────────────────────────────────────────── Customer ──────────────
Customer.hasMany (Address, {
  foreignKey: {
    name: 'customer_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

Customer.hasMany (UserKey, {
  foreignKey: {
    name: 'customer_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

Customer.hasMany (Order, {
  foreignKey: {
    name: 'customer_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

Customer.hasMany (Shipping, {
  foreignKey: {
    name: 'customer_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

Customer.hasMany (Factor, {
  foreignKey: {
    name: 'customer_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

// ─────────────────────────────────────────────────────── City and Province ─────
Address.belongsTo (City, {
  foreignKey: {
    name: 'city_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

Address.belongsTo (Province, {
  foreignKey: {
    name: 'province_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

City.hasMany (Address, {
  foreignKey: {
    name: 'city_id',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});

Province.hasMany (Address, {
  foreignKey: {
    name: 'province_id',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});

Province.hasMany (City, {
  foreignKey: {
    name: 'province_id',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});

// ─────────────────────────────────────────────────────────────────── ORDERS ─────
Order.belongsTo (Customer, {
  foreignKey: {
    name: 'customer_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Order.belongsTo (CakeOrder, {
  foreignKey: {
    name: 'cakeorder_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Order.belongsTo (DoubleCakeOrder, {
  foreignKey: {
    name: 'doublecakeorder_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Order.belongsTo (ReadyProductOrder, {
  foreignKey: {
    name: 'readyproductorder_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Order.belongsTo (ThemeTableOrder, {
  foreignKey: {
    name: 'ttorder_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Order.hasOne (Factor, {
  foreignKey: {
    name: 'order_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Order.hasMany (Shipping, {
  foreignKey: {
    name: 'order_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

// ─────────────────────────────────────────────────────────────────── FACTORS ─────
Discount.belongsTo (Factor, {
  foreignKey: {
    name: 'discount_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

Factor.hasOne (Payement, {
  foreignKey: {
    name: 'factor_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
});

// ─── EXECUTION THE RELATIONS ───────────────────────────────────────────────────────────────────────────────
sequelize
  .sync ({force: false})
  .then (err => {
    console.log ('Connection has been established successfully.');
  })
  .catch (err => {
    console.error ('Unable to connect to the database:', err);
  });

module.exports = {
  Accessory,
  Cake,
  Category,
  Customer,
  DoubleCake,
  Product,
  ReadyProduct,
  Tag,
  Taste,
  Address,
  City,
  Customer,
  Employee,
  Province,
  SignupCode,
  UserKey,
  ThemeTable,
};
