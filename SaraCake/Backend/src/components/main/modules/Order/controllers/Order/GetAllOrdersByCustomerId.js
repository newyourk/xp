const models = require ('../../models');
const sequelize = require ('sequelize');

function getUniqueListBy (arr, key) {
  return [...new Map (arr.map (item => [item[key], item])).values ()];
}
module.exports = payload => {
  const orders1 = models.Order.findAll ({
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
        model: models.UserRelated.User,
        attributes: [
          'customer_firstname',
          'customer_lastname',
          'customer_mobile',
        ],
      },
    ],
    where: {
      customer_id: payload.customer_id,
    },
  });

  //
  // ─── SECOND ──────────────────────────────────────────────────────
  //

  const orders2 = models.Order.findAll ({
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
        model: models.UserRelated.User,
        attributes: [
          'customer_firstname',
          'customer_lastname',
          'customer_mobile',
        ],
      },
    ],
    where: {
      customer_id: payload.customer_id,
    },
  });

  return Promise.all ([orders1, orders2]).then (result => {
    //console.log(result[0], result[1]);
    let temparr = [].concat.apply (result[1], result[0]);
    let filteredtemp = temparr.filter (item => {
      return item.order_id;
    });
    return getUniqueListBy (filteredtemp, 'order_id');
  });
};
