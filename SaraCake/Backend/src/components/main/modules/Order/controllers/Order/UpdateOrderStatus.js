const models = require ('../../models');

module.exports = payload => {
  return models.OrderRelated.Order.update (
    {
      order_status: payload.order_status,
      emp_id: payload.emp_id,
      expert_id: payload.expert_id,
    },
    {
      where: {
        order_id: payload.order_id,
      },
    }
  );
};
