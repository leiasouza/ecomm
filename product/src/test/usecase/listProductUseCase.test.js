//import { createProductUseCase } from "../../usecase/createProductUseCase.js";
//import { listProductsUseCase } from "../../usecase/listProductsUseCase.js";
//import { produtoExemplo } from "../data/products.js";
//import request from 'supertest'
//const express = require('express');


//const app = express();


//app.get('/products', async (request, response) => {
   //const produtos = await listProductsUseCase();
        //return response.json(produtos);
//});



//app.get('/products', function(req, res) {
    //res.status(200).json(findProducts);
  //});
  
    //describe('GET /products', () => {
      //it('Retorna lista de produtos', async () => {
        //await request(app)
          //.get('/products')
          //.expect(200);
      //});
    //});






/** Imprime produtos antes de cadastrar qualquer produto */

//const emptyProductList = await listProductsUseCase();
//console.log("emptyProductList", emptyProductList);

/** Imprime produto depois de cadastrar algum produto */
//await createProductUseCase(produtoExemplo);
//const productList = await listProductsUseCase();
//console.log("productList", JSON.stringify(productList, undefined, 2));

