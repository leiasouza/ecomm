import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import express, { Router }  from "express";

export { router };

const router = new Router();

router.post('/accounts', function(request, response) {
    const { name, email, password } = request.body;
    createUserUseCase(name, email, password)
        .then(createUserUseCase => {
            response.status(201).json(createUserUseCase)
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        }); 
});