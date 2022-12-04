const Color = require("../models/Color");

exports.getList = async function () {
  try {
    const data = await Color.find().sort({ id: "asc" });
    return data;
  } catch (error) {
    throw Error("Unexpected error Color");
  }
};

exports.getListByIds = async function (ids) {
  try {
    const data = await Color.find({ id: { $in: ids } });
    return data;
  } catch (error) {
    throw Error("Unexpected error Color");
  }
};
