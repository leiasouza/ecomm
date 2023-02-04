import { app } from "../../src/app.js";
import request from "supertest";
import { createUserUseCase } from "../../src/use-case/createUserAccount.js";
import {
  client,
  getUsersCollection,
} from "../../src/repositories/accountRepository.js";

describe("POST em accounts", () => {
  afterEach(async () => {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    await usersCollection.deleteMany({});
    await client.close();
  });
  it("cria uma conta", async () => {
    await request(app)
      .post("/accounts")
      .set("Content-Type", "application/json")
      .set("Acept", "aplication/json")
      .send({
        name: "Alice",
        email: "alice@gmail.com",
        password: "senhaDaAlice",
      })
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({
          id: expect.any(String),
          name: "Alice",
          email: "alice@gmail.com",
          createdDate: new Date().toISOString().substring(0, 10),
        });
      });
  });

  it("should not create an user given an already used e-mail", async () => {
    await createUserUseCase("Leia", "leia@gmail.com", "senhaDaLeia");
    await request(app)
      .post("/accounts")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        name: "Leia",
        email: "leia@gmail.com",
        password: "senhaDaLeia",
      })
      .expect(400)
      .expect(({ body }) => {
        expect(body).toEqual([
          {
            property: "email",
            message: "email already used",
          },
        ]);
      });
  });

  it("should not create an user given invalid e-mail", async () => {
    await request(app)
      .post("/accounts")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        name: "Leia",
        email: "leiagmail.com",
        password: "senhaDaLeia",
      })
      .expect(400)
      .expect(({ body }) => {
        expect(body).toEqual(
          expect.arrayContaining([
            {
              message: expect.any(String),
              property: "email",
            },
          ])
        );
      });
  });
});
