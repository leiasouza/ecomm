import { Product } from '../../models/product.js';
import { ProductFeture } from '../../models/product_feture.js';
import { ProductImage } from '../../models/product_image.js';

export async function saveProduct(produto) {
    const createdProduct = await Product.create(produto, {
        include: [
            { association: Product.ProductFeture, as: 'features',},
            { association: Product.ProductImage, as: 'images'}
        ]
    });
    await createdProduct.save();
    return createdProduct;
}

export async function findProducts() {
    const allProducts = await Product.findAll({ include : [
        {
            model: ProductFeture,
            as: 'fetures'
        }, {
            model: ProductImage,
            as: 'images'
        }]
    });
    return allProducts;
}