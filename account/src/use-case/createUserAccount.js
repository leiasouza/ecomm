import bcrypt from "bcryptjs";
import {
  existsUserByEmail,
  saveAccount,
} from "../repositories/accountRepository.js";

export async function createUserUseCase(name, email, password) {
  const userAlreadyExists = await existsUserByEmail(email);

  if (userAlreadyExists) {
    console.error("e-mail is already registered.", email);
    throw new Error("e-mail is already registered.");
  }

  const createdDate = new Date().toISOString().substring(0, 10);
  const passwordHash = bcrypt.hashSync(password, process.env.PASSWORD_SALT );
  const user = {
    name,
    email,
    password: passwordHash,
    createdDate,
  };
  await saveAccount(user);
  return user;
}
