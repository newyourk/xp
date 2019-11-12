const models = require ('../../models');
const discount = require ('../../../shared/functions/Discount').discount;

module.exports = (payload, t) => {
  const price_current = discount (
    payload.product_off_percent,
    payload.product_off_toman,
    payload.product_price_former
  );

  return models.Product.create (
    {
      category_id: payload.category_id,
      product_name: payload.product_name,
      product_code: payload.product_code,
      product_description: payload.product_description,
      product_image_src: payload.product_image_src,
      product_off_percent: payload.product_off_percent,
      product_off_toman: payload.product_off_toman,
      product_price_current: price_current,
      product_price_former: payload.product_price_former,
      is_active: payload.is_active,
    },
    {
      transaction: t,
    }
  );
};
