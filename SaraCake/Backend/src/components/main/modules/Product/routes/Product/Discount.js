var price_current;

const discount = (off_percent, off_toman, price_former) => {
  if (off_percent !== undefined && off_percent != null && off_percent <= 100) {
    price_current = (100 - off_percent) / 100 * price_former;
  } else if (
    off_toman !== undefined &&
    off_toman != null &&
    off_toman <= price_former
  ) {
    price_current = price_former - off_toman;
  }
  return price_current;
};

module.exports.discount = discount;
