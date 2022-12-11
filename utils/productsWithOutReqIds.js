module.exports = (products, withOutIds) => {
  let newData = products;

  for (const i in withOutIds) {
    for (const p in products) {
      if (withOutIds[i] === products[p]._id.toString()) {
        newData.shift(products[p]);
      }
    }
  }

  return newData;
};
