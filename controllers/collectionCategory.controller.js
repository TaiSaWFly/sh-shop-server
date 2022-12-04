const CollectionCategoryService = require("../services/collectionCategory.service");

exports.getList = async function (req, res) {
  try {
    const data = await CollectionCategoryService.getList();
    res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "An error has occurred on the server. Try again later...",
      });
  }
};

exports.getCategoryByCollectionCategoryId = async function (req, res) {
  const { id } = req.params;
  const collectionCategory = await CollectionCategoryService.getListByIds(id);

  const data = collectionCategory;
  try {
    return res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "An error has occurred on the server. Try again later...",
      });
  }
};
