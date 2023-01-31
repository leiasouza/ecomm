import { randomUUID } from 'crypto';

export const productExample = {
    //user_id: randomUUID(),
    name: "Tênis",
    value: 30,
    quantity: 2,
    description: "Tenis preto cocadarço",
    category: "Calçados",
    fetures: [{name: "cor", description: "preto"}],
    images: [{url: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hb8/hf3/h00/h00/9572416782366/1002001070008U-01-BASEIMAGE-Hires.jpg", description: "Tênis preto"}]
  };