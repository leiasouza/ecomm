import { createProductUseCase } from "./usecase/createProductUseCase.js";
import { Router }  from "express";
import {listProductsUseCase} from "./usecase/listProductsUseCase.js"

const router = Router();

router.post('/products', async (request, response) => {
    const produto = request.body;
    const createdProduct = await createProductUseCase(produto);
        return response.status(201).json(createdProduct);
});

router.get('/products', async (request, response) => {
    const produtos = await listProductsUseCase();
        return response.json(produtos);
});


export { router };