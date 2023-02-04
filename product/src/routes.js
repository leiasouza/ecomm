import { createProductUseCase } from "./usecase/createProductUseCase.js";
import { Router } from "express";
import { listProductsUseCase } from "./usecase/listProductsUseCase.js";
import { decriptToken } from "./helpers/token.js";
import { randomUUID } from "crypto";

const router = Router();

router.post("/products", async (request, response) => {
  const authorizationHeader = request.headers.authorization;
  if (!authorizationHeader) {
    return response.status(401).json({ message: "authentication required" });
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    return response
      .status(401)
      .json({ message: "authorization header malformed" });
  }

  const tokenDecripted = decriptToken(token);
  const userId = tokenDecripted.userId;

  if (!userId) {
    return response.status(403).json({ message: "forbidden" });
  }
  const productToCreate = request.body;
  const { hasErrors, errors, produto } = await createProductUseCase(
    productToCreate,
    userId
  );

  if (hasErrors) {
    return response.status(400).json(errors);
  }

  return response.status(201).json(produto);
});

router.get("/products", async (request, response) => {
  const produtos = await listProductsUseCase();
  return response.json(produtos);
});

export { router };
