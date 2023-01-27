import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { Router } from "express";
import { createUserTokenUseCase } from "./use-case/createUserToken.js";

const router = Router();

router.post("/accounts", function (request, response) {
  const { name, email, password } = request.body;
  createUserUseCase(name, email, password)
    .then((createdAccount) => {
      response.status(201).json(createdAccount);
    })
    .catch((error) => {
      response.status(400).json({ status: "error", message: error.message });
    });
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
