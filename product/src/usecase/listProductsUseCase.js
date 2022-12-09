import { findProducts } from "../repositories/productRepository.js";

export async function listProducts() {

    const produtos = await findProducts();
    return produtos

}