import { createProductUseCase } from "../../usecase/createProductUseCase.js";
import { produtoExemplo } from "../data/products.js";

const createdProduct = await createProductUseCase(produtoExemplo);

console.log(createdProduct);