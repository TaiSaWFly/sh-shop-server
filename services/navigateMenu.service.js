const NavigateMenu = require("../models/NavigateMenu");

exports.getList = async function () {
  try {
    const data = await NavigateMenu.find().sort({ id: "asc" });
    return data;
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};
