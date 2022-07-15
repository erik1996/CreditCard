import { Router } from 'express';
import { getCardController, insertCardController, removeCardController } from '../controllers/card.controller';
import { validationMiddleware } from '../middleware/validation.middleware';
import { cardValidation } from '../validation/card.validation';

const cardRouter = Router();

cardRouter.get('/', getCardController);
cardRouter.post('/', validationMiddleware(cardValidation), insertCardController);
cardRouter.delete('/:id', removeCardController);

export default cardRouter;