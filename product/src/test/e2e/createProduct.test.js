import { productExample } from "../data/products.js";
import { app } from "../../app.js";
import request from "supertest";

describe('Criação de produto', () => {
  it('cria novo produto', async () => {
    await request(app)
      .post('/products')
      .set('Content-Type', 'application/json')
      .set('Accept', 'aplication/json')
      .send(productExample)
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({
          ...productExample,
          id: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          fetures: productExample.fetures.map(feture => ({
            ...feture,
            id: expect.any(Number),
            product_id: body.id,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          })),
          images: productExample.images.map(image => ({
            ...image,
            id: expect.any(Number),
            product_id: body.id,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          })),
        });
   
      });
  });
});
