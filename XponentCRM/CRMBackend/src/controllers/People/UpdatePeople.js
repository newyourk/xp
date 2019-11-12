const Models = require ('../../models');

module.exports = payload => {
  return Models.People.update (
    {
      pp_fullname: payload.pp_fullname,
      pp_mobile: payload.pp_mobile,
      pp_role: payload.pp_role,
    },
    {
      where: {
        pp_id: payload.pp_id,
      },
    }
  );
};
