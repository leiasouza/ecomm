const produtos = [];

export async function saveProduct(produto) {
   
    produtos.push(produto)
    
}

export async function findProducts() {
    return produtos;
}