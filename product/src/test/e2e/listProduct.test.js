import { app } from "../../app.js";
import request from "supertest";

describe("Lista produtos", () => {
  it("Lista de produtos vazia", async () => {
    await request(app)
      .get("/products")
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual([]);
      });
  });

  it("Lista de produtos cadastrados", async () => {
    await request(app)
      .get("/products")
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual([]);
      });
  });
});
