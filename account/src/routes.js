import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { Router } from "express";
import { createUserTokenUseCase } from "./use-case/createUserToken.js";

const router = Router();

router.post("/accounts", async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const createdUser = await createUserUseCase(name, email, password);

    return response.status(201).json({
      id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      createdDate: createdUser.createdDate,
    });
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
});

router.post("/tokens", async (request, response) => {
  const { email, password } = request.body;
  const authToken = await createUserTokenUseCase(email, password);

  if (!authToken) {
    return response.status(401).json({
      message: "user e-mail or password incorrect",
    });
  }

  return response.status(201).json({
    token: authToken,
  });
});

export { router };
