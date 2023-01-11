import { Model, DataTypes } from "sequelize";
import client from "../src/repositories/databaseClients.js";

export class ProductImage extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

ProductImage.init(
  {
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
  },
  { sequelize: client, modelName: "ProductImage" }
);

