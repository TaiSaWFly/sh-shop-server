const CollectionService = require("../services/collection.service");
const CollectionCategoryService = require("../services/collectionCategory.service");
const CategoryService = require("../services/category.service");
const ProductService = require("../services/product.service");

const transformDataByCollectionAndCategories = require("../utils/transformDataByCollectionAndCategories");

exports.getList = async function (req, res) {
  try {
    const data = await CollectionService.getList();
    res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};

exports.getCollectionByPath = async function (req, res) {
  try {
    const { path } = req.params;
    const collection = await CollectionService.getCollectionByPath(path);
    const collectionCategory = await CollectionCategoryService.getListById(
      collection.id
    );

    if (collectionCategory) {
      const caterories = await CategoryService.getListByIds(
        collectionCategory.categories
      );

      const products =
        await ProductService.getTransformedListByCollectionAndCategories(
          collection.id,
          collectionCategory.categories
        );

      const data = transformDataByCollectionAndCategories(
        collection,
        caterories,
        products
      );

      res.status(200).send(data);
    } else {
      const products = await ProductService.getListByCollectionId(
        collection.id
      );

      const data = {
        id: collection.id,
        name: collection.name,
        path: collection.path,
        products: products,
      };

      res.status(200).send(data);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};
