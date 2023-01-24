import { saveProduct } from "../repositories/productRepository.js";

export async function createProductUseCase(produto, userId) {
    const savedProduct = await saveProduct({...produto, user_id: userId});
    return savedProduct;
}
