import BaseJoi from 'joi';
import JoiDate from '@joi/date';

const Joi = BaseJoi.extend(JoiDate);

export const cardValidation = Joi.object().keys({
  cardNumber: Joi.string().regex(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|4[0-9]{12}(?:[0-9]{3}){0,2}$/).required(),
  cardHolderName: Joi.string().required(),
  limit: Joi.number().required(),
  expirationDate: Joi.date().format("MM/YY").greater(Date.now() + 48 * 60000).required()
})
