import BaseJoi from "joi";
import JoiDate from "@joi/date";

const Joi = BaseJoi.extend(JoiDate);

export const cardValidation = Joi.object().keys({
  cardNumber: Joi.string()
    .custom((value, helper) => {
      const num = value.replace(/\s/g, "");
      let arr = num
        .split("")
        .reverse()
        .map((x) => parseInt(x));
      let lastDigit = arr.splice(0, 1)[0];
      let sum = arr.reduce(
        (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
        0
      );
      sum += lastDigit;
      return sum % 10 === 0 ? true : helper.message("Card Number Is Incorrect");
    })
    .required(),
  cardHolderName: Joi.string().required(),
  limit: Joi.number().required(),
  expirationDate: Joi.date()
    .format("MM/YY")
    .greater(Date.now() + 48 * 60000)
    .required(),
});
