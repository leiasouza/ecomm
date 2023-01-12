import { Model, DataTypes } from "sequelize";
import client from "../src/repositories/databaseClients.js";
import { Product } from "./product.js";
export class ProductFeture extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
ProductFeture.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
  },
  {
    sequelize: client,
    modelName: "ProductFeture",
  }
);


