import { productExample } from "../data/products.js";
import { app } from "../../app.js";
import request from "supertest";
import { generateToken } from "../data/helpers/tokens.js";
import { cleanProductTable } from "../data/helpers/products.js";

describe("Criação de produto", () => {
  afterEach(async () => {
    await cleanProductTable();
  });

  it("must create a product with the required data", async () => {
    await request(app)
      .post("/products")
      .set("Content-Type", "application/json")
      .set("Accept", "aplication/json")
      .set("Authorization", `Bearer ${generateToken("id-do-usuario")}`)
      .send(productExample)
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({
          ...productExample,
          id: expect.any(Number),
          user_id: "id-do-usuario",
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          fetures: productExample.fetures.map((feture) => ({
            ...feture,
            id: expect.any(Number),
            product_id: body.id,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          })),
          images: productExample.images.map((image) => ({
            ...image,
            id: expect.any(Number),
            product_id: body.id,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          })),
        });
      });
  });
  it("should not create a product when no authorization info is provided", async () => {
    await request(app)
      .post("/products")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(401)
      .expect(({ body }) => {
        expect(body).toEqual({ message: "authentication required" });
      });
  });
  it("should not create a product when authorization info is malformed", async () => {
    await request(app)
      .post("/products")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Authorization", "header-errado")
      .expect(400)
      .expect(({ body }) => {
        expect(body).toEqual({ message: "authorization header malformed" });
      });
  });
  it("should not create a product when authorization info was modified", async () => {
    const modifiedToken = generateToken("id-usuario") + "a";
    await request(app)
      .post("/products")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${modifiedToken}`)
      .expect(403)
      .expect(({ body }) => {
        expect(body).toEqual({ message: "forbidden" });
      });
  });
});
