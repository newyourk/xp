const models = require ('../../../../modules/shared/Relations');
const GetProductByCake = require ('./GetProductByCake');
const GetProductByDoubleCake = require ('./GetProductByCake');
const GetProductByReadyProduct = require ('./GetProductByCake');
const GetProductByThemeTabel = require ('./');

module.exports = (type, is_exist, is_active) => {
  switch (type) {
    case 'cake':
      return GetProductByCake (is_exist, is_active);
    case 'doublecake':
      return GetProductByDoubleCake (is_exist, is_active);
    case 'readyproduct':
      return GetProductByReadyProduct (is_exist, is_active);
    case 'themetable': {
      return GetProductByThemeTabel (is_exist, is_active);
    }
  }
};
