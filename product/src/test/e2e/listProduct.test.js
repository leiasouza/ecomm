import { app } from "../../app.js";
import request from "supertest";
import { productExample } from "../data/products.js";
import { saveProduct } from "../../repositories/productRepository.js";
import { clearProductTable } from "../data/helpers/products.js";

describe("Lista produtos", () => {
  afterEach(async () => {
    clearProductTable;
  });
  it("Lista de produtos vazia", async () => {
    await request(app)
      .get("/products")
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual([]);
      });
  });

  it("Lista de produtos cadastrados", async () => {
    await saveProduct(productExample)
    await request(app)
      .get("/products")
      .expect(200)
      .expect(({ body }) => {
        expect(body.length).toBe(1);
        expect(body).toEqual(expect.arrayContaining([{
          ...productExample,
          value: String(productExample.value),
          id: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          fetures: expect.arrayContaining(productExample.fetures.map(feture => ({
              ...feture,
              id: expect.any(Number),
              product_id: body[0].id,
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
            }))),

          images: expect.arrayContaining(productExample.images.map(image => ({
              ...image,
              id: expect.any(Number),
              product_id: body[0].id,
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
            }))),
        }]));
      });
  });
});
