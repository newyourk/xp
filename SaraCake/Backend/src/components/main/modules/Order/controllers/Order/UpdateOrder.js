const models = require ('../../models');

module.exports = (payload, t) => {
  return models.OrderRelated.Order.update (
    {
      order_status: payload.order_status,
      order_total_price: payload.order_total_price,
      emp_id: payload.emp_id,
      expert_id: payload.expert_id,
      order_contract_delivery_date: payload.order_contract_delivery_date,
    },
    {
      where: {
        order_id: payload.order_id,
      },
      transaction: t,
    }
  );
};
