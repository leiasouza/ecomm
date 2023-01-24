import { comparePassword } from "../helpers/passwords.js";
import { generateToken } from "../helpers/token.js";
import { findAccountByeEmail } from "../repositories/accountRepository.js";

export async function createUserTokenUseCase(email, password){
    const possibleUser = await findAccountByeEmail(email);

    if(!possibleUser){
        return null;
    }

    const passwordIsMatch = comparePassword(password, possibleUser.password);

    if (passwordIsMatch) {
        return generateToken(possibleUser._id);

    }

    return null;
}