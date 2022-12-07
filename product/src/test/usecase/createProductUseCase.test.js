import { createProductUseCase } from "../../usecase/createProductUseCase.js";
import { randomUUID } from 'crypto';

const createdData = new Date().toISOString().substring(0, 10);
const usuarioId = randomUUID();
const productId = randomUUID();

const produto = {
    createdData,
    usuarioId,
    productId,
    nome: "Tênis",
    valor: 100,
    quantidade: 4,
    descricao: "Tênis cadarço",
    categoria: "Calçados",
    caracteristicas: [
      {
        nome: "Tênis Unisex ",
        descricao: "Tênis preto com cadarço",
      }
    ],
    imagens: [
      {
        url: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hb8/hf3/h00/h00/9572416782366/1002001070008U-01-BASEIMAGE-Hires.jpg",
        descricao: "Tênis preto com cadarço",
      }
    ]
}

const product = await createProductUseCase(produto);
console.log(product);