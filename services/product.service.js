const Product = require("../models/Product");

const transformProductDataByCategories = require("../utils/transformProductDataByCategories");

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
  cateroriesIds
) {
  try {
    const data = await Product.find({
      collectionId: collectionId,
      categoryId: { $in: cateroriesIds },
    });

    return data;
  } catch (error) {}
};
