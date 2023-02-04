import bcrypt from "bcryptjs";
import {
  findUserByEmail,
  saveAccount,
} from "../repositories/accountRepository.js";
import joi from "joi";

const accountValidator = joi.object({
  email: joi.string().email(),
  password: joi.string().trim().min(8),
});

export async function createUserUseCase(name, email, password) {
  const { error } = accountValidator.validate(
    {
      email,
      password
    },
    { abortEarly: false }
  );

  if (error) {
    return {
      hasError: true,
      errors: error.details.map((error) => ({
        message: error.message,
        property: error.path.at(0),
      })),
      account: {}
    };
  }

  const userAlreadyExists = await findUserByEmail(email);

  if (userAlreadyExists) {
    return {
      hasError: true,
      errors: [
        {
          property: "email",
          message: "email already used"
        },
      ],
      account: {}
    };
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
    errors: undefined,
    account: { ...user, id: user._id, password: undefined, _id: undefined },
  };
}
