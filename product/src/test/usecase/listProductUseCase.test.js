import { createProductUseCase } from "../../usecase/createProductUseCase.js";
import { listProducts } from "../../usecase/listProductsUseCase.js";
import { segundoProduto } from "./createProductUseCase.test.js";


const productList = listProducts();
await createProductUseCase(segundoProduto);
console.log("Produtos", productList)

