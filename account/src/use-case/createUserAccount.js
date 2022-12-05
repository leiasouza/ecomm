
import { saveAccount } from "../repositories/accountRepository.js";

export function createUserUseCase(nome, email, senha) {
    const createdData = new Date().toISOString().substring(0, 10);

    const user = {
        name: nome,
        email: email,
        password: senha,
        createdData

    };
    saveAccount(user);
 }