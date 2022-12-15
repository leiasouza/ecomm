import { randomUUID } from 'crypto';

export const produtoExemplo = {
    usuarioId: randomUUID(),
    nome: "Tênis",
    valor: 30,
    quantidade: 2,
    descricao: "Tenis preto cocadarço",
    categoria: "Calçados",
    caracteristicas: [{nome: "cor", descricao: "preto"}],
    imagens: [{url: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hb8/hf3/h00/h00/9572416782366/1002001070008U-01-BASEIMAGE-Hires.jpg", descricao: "Tênis preto"}]
  };