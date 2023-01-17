import { app } from "../../src/app.js";
import request from "supertest";
import { client, getUsersCollection } from "../../src/repositories/accountRepository.js";



describe("POST em accounts", () => {
  afterEach( async() => {
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
});
