import  bcrypt from 'bcryptjs';
import { saveAccount } from "../repositories/accountRepository.js";

export async function createUserUseCase(name, email, password) {
    const createdDate = new Date().toISOString().substring(0, 10);
    const passwordHash = bcrypt.hashSync(password ,10);
    const user = {
        name,
        email,
        password: passwordHash,
        createdDate

    };
    await saveAccount(user);
    return user;
 }