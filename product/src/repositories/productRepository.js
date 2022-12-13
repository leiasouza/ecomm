import { randomUUID } from 'crypto';

const produtos = [];

export async function saveProduct(produto) {
    const id = randomUUID();
    const createdData = new Date().toISOString().substring(0, 10);

    const productCreated = {id, createdData, ...produto};
    
    produtos.push(productCreated);
    
    return productCreated;
    
}

export async function findProducts() {
    return produtos;
}