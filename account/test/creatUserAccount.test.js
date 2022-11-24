import { creatUserUseCase } from "../src/use-case/creatUserAccount.js";

const user = creatUserUseCase("luiza", "luiza@email.com", "senhaDaLuiza");

 console.log(user);