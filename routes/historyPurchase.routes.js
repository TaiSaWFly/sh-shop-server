const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/historyPurchase.controller");

router.get("/", Controller.getList);
router.post("/", Controller.create);

module.exports = router;
