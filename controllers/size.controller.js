const SizeService = require("../services/size.service");

exports.getList = async function (req, res) {
  try {
    const data = await SizeService.getList();
    res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};
