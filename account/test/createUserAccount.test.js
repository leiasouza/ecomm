import { createUserUseCase } from "../src/use-case/createUserAccount.js";

const user = createUserUseCase("julia", "julia@email.com", "senhaDaJulia");

 console.log(user);