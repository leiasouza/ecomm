import { createUserUseCase } from "../src/use-case/createUserAccount.js";

const user = createUserUseCase("Alice", "Alice@email.com", "senhaDaAlice");

 console.log(user);