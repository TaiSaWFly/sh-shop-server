const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/product.controller");

router.get("/", Controller.getList);
router.get("/:collectionPath", Controller.getListByCollection);
router.get(
  "/:collectionPath/:categoryPath",
  Controller.getListByCollectionAndCategory
);

module.exports = router;
