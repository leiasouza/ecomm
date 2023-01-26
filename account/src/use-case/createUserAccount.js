import  bcrypt from 'bcryptjs';
import { findUserByEmail, saveAccount } from "../repositories/accountRepository.js";


export async function createUserUseCase(name, email, password) {

    const userAlreadyExists = await findUserByEmail(email);
    if(userAlreadyExists) {
        console.error('e-mail already registered', email);
        return;

    }

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