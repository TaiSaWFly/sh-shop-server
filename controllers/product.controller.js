const ProductService = require("../services/product.service");
const CollectionService = require("../services/collection.service");
const CategoryService = require("../services/category.service");

exports.getList = async function (req, res) {
  try {
    const data = await ProductService.getList();
    res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};

exports.getListLimitAndId = async function (req, res) {
  try {
    const { limit, withOutIds } = req.body;

    const data = await ProductService.getListLimitAndId(limit, withOutIds);
    res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};

exports.getListByCollection = async function (req, res) {
  try {
    const { collectionPath } = req.params;
    const collection = await CollectionService.getCollectionByPath(
      collectionPath
    );
    const products = await ProductService.getListByCollectionId(collection.id);

    const data = {
      id: collection.id,
      name: collection.name,
      path: collection.path,
      products: products,
    };
    res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};

exports.getListByCollectionAndCategory = async function (req, res) {
  try {
    const { collectionPath, categoryPath } = req.params;
    const { limit, withOutIds } = req.body;

    const collection = await CollectionService.getCollectionByPath(
      collectionPath
    );
    const category = await CategoryService.getCategoryByPath(categoryPath);
    const products = await ProductService.getListByCollectionAndCategories(
      collection.id,
      category.id,
      limit,
      withOutIds
    );

    res.status(200).json({
      status: 200,
      content: products,
      message: "Succesfully Product Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
