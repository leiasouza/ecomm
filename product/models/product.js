import { Model, DataTypes } from "sequelize";
import client from "../src/repositories/databaseClients.js";
import { ProductFeture } from "./product_feture.js";
import { ProductImage } from "./product_image.js";

export class Product extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

Product.init(
  {
    name: DataTypes.STRING,
    value: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    user_id: DataTypes.UUID,
  },
  { sequelize: client, modelName: "Product" }
);

Product.ProductImage = Product.hasMany(ProductImage, {
  foreignKey: 'product_id',
  as: 'images'
});

 Product.ProductFeture = Product.hasMany(ProductFeture, {
  foreignKey: 'product_id',
  as: 'fetures'

});

ProductImage.belongsTo(Product, {
  foreignKey: 'id',
});

ProductFeture.belongsTo(Product, {
  foreignKey: 'id',
});

