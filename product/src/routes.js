import { createProductUseCase } from "./usecase/createProductUseCase.js";
import express, { Router }  from "express";
import {listProductsUseCase} from "./usecase/listProductsUseCase.js"

const router = new Router();

router.post('/products', function(request, response) {
    const produtoExemplo = request.body;
    createProductUseCase(produtoExemplo)
        .then(data => {
            response.status(201).json(data)
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        }); 
});

router.get('/products', function(request, response){
    listProductsUseCase().then(produtos=> {
        response.json(produtos);
    });
});

export { router };