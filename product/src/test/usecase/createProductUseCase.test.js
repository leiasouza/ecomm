import { createProductUseCase } from "../../usecase/createProductUseCase.js";
import { randomUUID } from 'crypto';

const createdData = new Date().toISOString().substring(0, 10);
const usuarioId = randomUUID();
const productId = randomUUID();

const produto = {
    createdData,
    usuarioId,
    productId,
    nome: "string",
    valor: 10,
    quantidade: 1,
    descricao: "string",
    categoria: "string",
    caracteristicas: [
      {
        nome: "string",
        descricao: "string",
      }
    ],
    imagens: [
      {
        url: "string",
        descricao: "string",
      }
    ]
}

//const produtos = createProductUseCase(produto);
 console.log(produto);
