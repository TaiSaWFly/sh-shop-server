const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/product.controller");

router.get("/", Controller.getList);
router.post("/limit", Controller.getListLimitAndId);
router.get("/:collectionPath", Controller.getListByCollection);
router.post(
  "/:collectionPath/:categoryPath",
  Controller.getListByCollectionAndCategory
);

module.exports = router;
