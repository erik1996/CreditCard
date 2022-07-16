import request from "supertest";
import CardModel from "../../db/models/card.model";
import app from "../../index";

describe("Card", () => {
  beforeEach(async () => {
    await CardModel.deleteMany({});
  });

  describe("Get Cards", () => {
    test("should respond with a status code of 200", async () => {
      const response = await request(app).get("/card");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("Add Card", () => {
    test("should respond with a status code of 200", async () => {
      const bodyData = {
        cardNumber: "4000 0012 3456 2345",
        cardHolderName: "JO",
        expirationDate: "12/22",
        limit: 100,
      };
      const response = await request(app).post("/card").send(bodyData);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("Add Card", () => {
    test("should respond with a status code of 200", async () => {
      const bodyData = {
        cardNumber: "4000 0012 3456 234",
        cardHolderName: "JO",
        expirationDate: "12/22",
        limit: 100,
      };
      const response = await request(app).post("/card").send(bodyData);
      expect(response.statusCode).toBe(422);
    });
  });
});
