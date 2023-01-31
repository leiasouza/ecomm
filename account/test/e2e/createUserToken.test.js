import { app } from "../../src/app.js";
import request from "supertest";
import {
  client,
  getUsersCollection,
} from "../../src/repositories/accountRepository.js";
import { createUserUseCase } from "../../src/use-case/createUserAccount.js";

describe("POST em accounts", () => {
  afterEach(async () => {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    await usersCollection.deleteMany({});
    await client.close();
  });
  it("should generate a token given correct account data", async () => {
    await createUserUseCase("Alice", "alice@gmail.com", "senhaDaAlice");
    await request(app)
      .post("/tokens")
      .set("Content-Type", "application/json")
      .set("Accetp", "application/json")
      .send({ email: "alice@gmail.com", password: "senhaDaAlice" })
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({ token: expect.any(String) });
      });
  });

  it("should not generate a token given incorrect password account", async () => {
    await createUserUseCase("Alice", "alice@gmail.com", "senhaDaAliceee");
    await request(app)
      .post("/tokens")
      .set("Content-Type", "application/json")
      .set("Accetp", "application/json")
      .send({ email: "Alice@gmail.com", password: "senhaDaAlice" })
      .expect(401)
      .expect(({ body }) => {
        expect(body).toEqual({ message: "user e-mail or password incorrect" });
      });
  });

  it("should not generate a token given incorrect email account", async () => {
    await createUserUseCase("Alice", "aliceaa@gmail.com", "senhaDaAlice");
    await request(app)
      .post("/tokens")
      .set("Content-Type", "application/json")
      .set("Accetp", "application/json")
      .send({ email: "Alice@gmail.com", password: "senhaDaAlice" })
      .expect(401)
      .expect(({ body }) => {
        expect(body).toEqual({ message: "user e-mail or password incorrect" });
      });
  });

  it("should not generate a token given incorrect email account", async () => {
    await request(app)
      .post("/tokens")
      .set("Content-Type", "application/json")
      .set("Accetp", "application/json")
      .send({ email: "Alice@gmail.com", password: "asenhaDaAlice" })
      .expect(401)
      .expect(({ body }) => {
        expect(body).toEqual({ message: "user e-mail or password incorrect" });
      });
  });
});
