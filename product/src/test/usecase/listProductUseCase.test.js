import { createProductUseCase } from "../../usecase/createProductUseCase.js";
import { listProductsUseCase } from "../../usecase/listProductsUseCase.js";
import { produtoExemplo } from "../data/products.js";



/** Imprime produtos antes de cadastrar qualquer produto */

const emptyProductList = await listProductsUseCase();
console.log("emptyProductList", emptyProductList);

/** Imprime produto depois de cadastrar algum produto */
await createProductUseCase(produtoExemplo);
const productList = await listProductsUseCase();
console.log("productList", JSON.stringify(productList, undefined, 2));

