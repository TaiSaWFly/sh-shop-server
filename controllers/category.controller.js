const CategoryService = require("../services/category.service");

exports.getList = async function (req, res) {
  try {
    const data = await CategoryService.getList();
    res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};

exports.getListByIds = async function (req, res) {
  try {
    const ids = req.body;
    const data = await CategoryService.getListByIds(ids);
    res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};
