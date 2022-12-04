const Size = require("../models/Size");

exports.getList = async function () {
  try {
    const data = await Size.find();
    return data;
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};
