import bcrypt from "bcryptjs";
import {
  findUserByEmail,
  saveAccount,
} from "../repositories/accountRepository.js";
import joi from "joi";

const accountValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

export async function createUserUseCase(name, email, password) {
  const { error } = accountValidator.validate({ email, password });

  if (error) {
    return {
      hasError: true,
      errors: error.details.map((error) => ({
        message: error.message,
        property: error.path.at(0),
      })),
      account: {},
    };
  }

  const userAlreadyExists = await findUserByEmail(email);

  if (userAlreadyExists) {
    throw new Error("e-mail is already registered");
  }

  const createdDate = new Date().toISOString().substring(0, 10);
  const passwordHash = bcrypt.hashSync(
    password,
    process.env.PASSWORD_SALT | Number
  );
  const user = {
    name,
    email,
    password: passwordHash,
    createdDate,
  };

  await saveAccount(user);
  return {
    hasError: false,
    error: undefined,
    account: {...user, password: undefined }
  };
}
