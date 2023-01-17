import {productExample} from '../data/products.js'
import { app } from '../../app.js';  
import request from 'supertest'

//afterEach(() => {
  //server.close();
//});

describe('POST em /products', () => {

  it("cria novo produto", async () => {
     await request(app)
      .post('/products')
      .set('Content-Type', 'application/json')
      .set('Acept', 'aplication/json')
      .send(productExample)
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({
          ...productExample,
          createdAt: expect.any(String),
          updateAt: expect.any(String),
          fetures: productExample.fetures.map(feture => ({
            ...feture,
            createdAt: expect.any(String),
            updateAt: expect.any(String),
          })),
          images: productExample.images.map(image => ({
            ...image,
            createdAt: expect.any(String),
            updateAt: expect.any(String),
          }))
        });
      });
       
    });
});