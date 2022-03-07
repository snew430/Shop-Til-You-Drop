// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "id",
});
Category.hasMany(Product, {
  foreignKey: "id",
});
Product.belongsToMany(Tag, {
  through: ProductTag,
  //   as??????
  foreignKey: "id",
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  //as????????
  foreignKey: "id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
