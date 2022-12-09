import { createProductUseCase } from "../../usecase/createProductUseCase.js";

const produto1 = {
  nome: "Tênis",
  valor: 30,
  quantidade: 2,
  descricao: "Tenis Cadarço preto",
  categoria: "Calçado",
  caracteristicas: [{nome: "Tênis Unisex", descricao: "Tênis preto com cadarço",}],
  imagens: [{url: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hb8/hf3/h00/h00/9572416782366/1002001070008U-01-BASEIMAGE-Hires.jpg", descricao: "Tênis preto",}]
};

export const produto = await createProductUseCase(produto1)
console.log("Produtos:", produto);

const produto2 = { 


  nome: "Tênis",
  valor: 55,
  quantidade: 4,
  descricao: "Tenis Cadarço ",
  categoria: "Calçado",
  caracteristicas: [{nome: "Tênis Unisex", descricao: "Tênis branco com cadarço",}],
  imagens: [{url: "https://espacotenis.vteximg.com.br/arquivos/ids/164110-1000-1000/vans--14-.jpg?v=637527027707530000", descricao: "Tênis branco",}]
};

export const segundoProduto = await createProductUseCase(produto2)
console.log("Produtos:", segundoProduto);