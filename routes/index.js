const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/color", require("./color.routes")); //
router.use("/category", require("./category.routes")); //
router.use("/collection", require("./collection.routes")); //
router.use("/collectionCategory", require("./collectionCategory.routes")); //
router.use("/navigateMenu", require("./navigateMenu.routes")); //
router.use("/size", require("./size.routes")); //
router.use("/product", require("./product.routes")); //
router.use("/historyPurchase", require("./historyPurchase.routes")); //
router.use("/userAddress", require("./userAddress.routes"));

module.exports = router;
