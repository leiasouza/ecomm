const produtos = [];

export async function saveProduct(produto) {
   
    produtos.push(produto)
    return produtos
    
}

export async function findProducts() {
    return produtos;
}