const HistoryPurchaseService = require("../services/historyPurchase.service");

exports.getList = async function (req, res) {
  try {
    const data = await HistoryPurchaseService.getList();
    res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};

exports.create = async function (req, res) {
  try {
    console.log(req.body);

    const data = await HistoryPurchaseService.create(req.body);
    res.status(201).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};
