import { Router } from "express";
import {
  getCardController,
  insertCardController,
} from "../controllers/card/card.controller";
import { validationMiddleware } from "../middleware/validation.middleware";
import { cardValidation } from "../validation/card.validation";

const cardRouter = Router();

cardRouter.get("/", getCardController);
cardRouter.post(
  "/",
  validationMiddleware(cardValidation),
  insertCardController
);

export default cardRouter;
