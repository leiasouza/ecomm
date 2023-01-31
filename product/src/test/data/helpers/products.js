import { findProducts } from "../../../repositories/productRepository.js";
export async function cleanProductTable() {
  const products = await findProducts();
  for await (const product of products) {
    const productFeturesDeletion = product.fetures.map(feture => feture.destroy())
    const productImagesDeletion = product.images.map(image => image.destroy());
    await Promise.all([...productFeturesDeletion, productImagesDeletion]);
    await product.destroy();
  }
}
