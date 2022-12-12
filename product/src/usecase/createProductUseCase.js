import { saveProduct } from "../repositories/productRepository.js";
import { randomUUID } from 'crypto';

export async function createProductUseCase(produto) {
    const createdData = new Date().toISOString().substring(0, 10);
    const productId = randomUUID();
    
    const createdProduct = produto;
    createdProduct.createdData= createdData;
    createdProduct.productId = productId;
    
    await saveProduct(createdProduct);
    return createdProduct;
}
