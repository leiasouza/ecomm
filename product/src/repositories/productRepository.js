import { Product } from '../../models/product.js';
export async function saveProduct(produto) {
    const createdProduct = await Product.create(produto);
    await createdProduct.save();
    return createdProduct;
    


    
}

export async function findProducts() {
    const allProducts = await Product.findAll();
    return allProducts;
}