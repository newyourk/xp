const models = require ('../../models');
const sequelize = require ('sequelize');

function getUniqueListBy (arr, key) {
  return [...new Map (arr.map (item => [item[key], item])).values ()];
}

module.exports = () => {
  const orders1 = models.Order.findAll ({
    attributes: {
      include: [
        'order_id',
        'customer_id',
        'createdAt',
        'order_contract_delivery_date',
        'order_total_price',
        'order_status',
        'category_id',
      ],
    },
    include: [
      {
        model: models.Shipping,
        attributes: ['customer_firstname', 'customer_lastname'],
      },
    ],
  });

  //
  // ─── SECOND ──────────────────────────────────────────────────────
  //

  const orders2 = modelsOrder.findAll ({
    attributes: [
      'order_id',
      'customer_id',
      'createdAt',
      'order_contract_delivery_date',
      'order_total_price',
      'order_status',
      'category_id',
    ],
    include: [
      {
        model: models.Shipping,
        attributes: ['customer_firstname', 'customer_lastname'],
      },
    ],
  });

  return Promise.all ([orders1, orders2]).then (result => {
    let temparr = [].concat.apply (result[1], result[0]);
    let filteredtemp = temparr.filter (item => {
      return item.order_id;
    });
    return getUniqueListBy (filteredtemp, 'order_id');
  });
};
