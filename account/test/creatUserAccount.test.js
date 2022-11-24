import { creatUserUseCase } from "../src/use-case/creatUserAccount.js";

const user = creatUserUseCase("Alice", "Alice@email.com", "senhaDaAlice");

 console.log(user);