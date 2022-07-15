import { model, Schema, Model, Document } from 'mongoose';

interface ICard extends Document {
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  balance: number;
  limit: number;
}

const CardSchema: Schema = new Schema({
  cardNumber: { type: String, required: true },
  cardHolderName: { type: String, required: true },
  expirationDate: { type: String, required: true },
  balanace: {type: Number, default: 0, required: true},
  limit: {type: Number, default: 0, required: true}
});

export default model<ICard>('Card', CardSchema);