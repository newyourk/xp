const Models = require ('../../models');

module.exports = payload => {
  return Models.People.create ({
    pp_fullname: payload.pp_fullname,
    pp_mobile: payload.pp_mobile,
    pp_role: payload.pp_role,
    brand_id: payload.brand_id,
  });
};
