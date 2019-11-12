const Sequelize = require ('sequelize');
const sequelize = require ('../../../../../../database/dbconnection');

module.exports = payload => {
  return sequelize.query (
    'SELECT discount_id from orders WHERE customer_id = :customer_id AND discount_id = (Select discount_id from discounts Where discount_code = :discount_code)',
    {
      replacements: {
        customer_id: payload.customer_id,
        discount_code: payload.discount_code,
      },
      type: sequelize.QueryTypes.SELECT,
    }
  );
};
