import { saveProduct } from "../repositories/productRepository.js";

export function createProductUseCase(product) {

    const createdProduct = product

    saveProduct(createdProduct);
    return createdProduct;
    }