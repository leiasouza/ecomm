import { app } from "../../app.js";
import request from "supertest";

describe("Lista produtos", () => {
  it("Lista de produtos cadastrados", async () => {
    await request(app)
      .get("/products")
      .then((response) => {
        expect(response.status).toEqual(200);
      });
  });
});
