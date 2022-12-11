const HistoryPurchase = require("../models/HistoryPurchase");

exports.getList = async function () {
  try {
    const data = await HistoryPurchase.find();
    return data;
  } catch (error) {
    throw Error("Unexpected error HistoryPurchase");
  }
};

exports.create = async function (data) {
  try {
    const newData = await HistoryPurchase.create(data);
    return newData;
  } catch (error) {
    throw Error("Unexpected error HistoryPurchase");
  }
};
