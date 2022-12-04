const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/category.controller");

router.get("/", Controller.getList);
router.get("/ids", Controller.getListByIds);

module.exports = router;
