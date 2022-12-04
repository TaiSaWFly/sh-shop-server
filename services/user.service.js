const User = require("../models/User");

exports.findOne = async function (param) {
  try {
    const data = await User.findOne(param);
    return data;
  } catch (error) {
    throw Error("Unexpected error User");
  }
};

exports.create = async function (data) {
  try {
    const newUser = await User.create(data);
    return newUser;
  } catch (error) {
    throw Error("Unexpected error User");
  }
};
