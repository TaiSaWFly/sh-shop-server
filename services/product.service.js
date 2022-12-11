const Product = require("../models/Product");

const transformProductDataByCategories = require("../utils/transformProductDataByCategories");
const productsWithOutReqIds = require("../utils/productsWithOutReqIds");

exports.getList = async function () {
  try {
    const data = await Product.find();
    return data;
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};

exports.getListLimitAndId = async function (limit, withOutIds) {
  try {
    console.log(limit, withOutIds);

    const data = await Product.find({ _id: withOutIds });
    return data;
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};

exports.getListByCollectionId = async function (collectionId) {
  try {
    const data = await Product.find({ collectionId });
    return data;
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};

exports.getTransformedListByCollectionAndCategories = async function (
  collectionId,
  cateroriesIds
) {
  try {
    const products = await Product.find({
      collectionId: collectionId,
      categoryId: { $in: cateroriesIds },
    });
    const data = transformProductDataByCategories(products, cateroriesIds);
    return data;
  } catch (error) {}
};

exports.getListByCollectionAndCategories = async function (
  collectionId,
  cateroriesIds,
  limit,
  withOutIds
) {
  try {
    console.log(collectionId, cateroriesIds, limit, withOutIds);

    const products = await Product.find({
      collectionId: collectionId,
      categoryId: { $in: cateroriesIds },
    });

    const productsReqWithOutIds = productsWithOutReqIds(products, withOutIds);

    const data = productsReqWithOutIds.filter((_, index) => index < limit);

    console.log(data.length);

    return data;
  } catch (error) {}
};

// function productsWithOutReqIds(products, withOutIds) {
//   let resData = products;

//   for (const i in withOutIds) {
//     for (const p in products) {
//       if (withOutIds[i] === products[p]._id.toString()) {
//         resData.shift(products[p]);
//       }
//     }
//   }

//   return resData;
// }
