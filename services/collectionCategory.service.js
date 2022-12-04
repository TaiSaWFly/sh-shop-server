const CollectionCategory = require("../models/CollectionCategory");

exports.getList = async function () {
  try {
    const data = await CollectionCategory.find();
    return data;
  } catch (error) {
    throw Error("Unexpected error CollectionCategory");
  }
};

exports.getListByIds = async function (ids) {
  try {
    const data = await CollectionCategory.find({ id: { $in: ids } });
    return data;
  } catch (error) {
    throw Error("Unexpected error CollectionCategory");
  }
};

exports.getListById = async function (collectionId) {
  try {
    const data = await CollectionCategory.findOne({ collectionId });
    return data;
  } catch (error) {
    throw Error("Unexpected error CollectionCategory");
  }
};
