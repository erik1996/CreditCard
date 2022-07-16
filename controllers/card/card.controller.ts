import { Request, Response } from "express";
import CardModel from "../../db/models/card.model";

export async function getCardController(req: Request, res: Response) {
  try {
    const list = await CardModel.find();
    res.json(list);
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function insertCardController(req: Request, res: Response) {
  try {
    const newCard = new CardModel(req.body);
    await newCard.save();
    res.json(newCard);
  } catch (err) {
    res.status(400).json(err);
  }
}
