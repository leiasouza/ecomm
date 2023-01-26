import { comparePassword } from "../helpers/passwords.js";
import { generateToken } from "../helpers/token.js";
import { findUserByEmail } from "../repositories/accountRepository.js";

export async function createUserTokenUseCase(email, password) {
  const userFound = await findUserByEmail(email);

  if (!userFound) {
    return null;
  }

  const passwordIsMatch = await comparePassword(password, userFound.password);

  if (!passwordIsMatch) {
    return null;
  }
  return generateToken(userFound._id);
}