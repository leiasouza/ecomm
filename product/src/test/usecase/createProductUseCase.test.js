
const client = require ("../src/repositories/databaseClients.js");
const request = require ("supertest");
const product = require ("../../../../product.js");

describe("products", () => {

  afterAll(() => {
    client.close();
  })

  it("criar novo produto", async () => {
    const response = await request(product).post("/products").send({
      user_id: "1",
      name: "Tênis",
      value: "10",
      quantity: "5",
      description: "Tênis preto ",
      category: "Calçados",
      images: [
        {
          url: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hb8/hf3/h00/h00/9572416782366/1002001070008U-01-BASEIMAGE-Hires.jpg",
          description: "Tênis preto ",
        },
      ],

      fetures: [
        {
          name: "Cor",
          description: "Preto",
        },
      ],
    });

    expect(response.ok).toBeTruthy();

  });
});

//describe('POST /products', () => {
//it('Retorna produto criado', async () => {
//await request(product)
// .post('/products',)
//.expect(200);
//});
//});

//const express = require('express');

//const app = express();

//router.post('/products', async (request, response) => {
//const produto = request.body;
//const createdProduct = await createProductUseCase(produto);
// return response.status(201).json(createdProduct);
//});
