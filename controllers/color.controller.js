const ColorService = require("../services/color.service");

exports.getList = async function (req, res) {
  try {
    console.log(req.query.id);
    if (req.query.id) {
      const data = await ColorService.getListByIds(req.query.id);
      res.status(200).send(data);
    } else {
      const data = await ColorService.getList();
      res.status(200).send(data);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};

exports.getListByIds = async function (req, res) {
  try {
    const { id } = req.params;
    // console.log(req.query.id);

    const data = await ColorService.getListByIds(id);
    res.status(200).send(data);
  } catch (error) {}
};

exports.getListByIdsPost = async function (req, res) {
  try {
    const data = await ColorService.getListByIds(req.query.id);
    res.status(200).send(data);
  } catch (error) {}
};
