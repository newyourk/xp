const models = require ('../../models');

module.exports = payload => {
  return models.Order.findAll ({
    attributes: [
      'order_id',
      'createdAt',
      'order_contract_delivery_date',
      'order_total_price',
      'order_status',
      'category_id',
      'discount_id',
    ],
    include: [
      {
        model: models.Shipping,
      },
      {
        model: models.Discount,
      },
      {
        model: models.Order,
        attributes: {exclude: ['customer_password']},
      },
    ],
    where: {
      order_id: payload.order_id,
    },
  });
};
