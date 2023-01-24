import { findProducts } from "../repositories/productRepository.js";

export async function listProductsUseCase() {
    const produtos = await findProducts();
    return produtos;

}