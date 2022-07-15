import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validationMiddleware = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body)
    const valid = error == null;
    if (valid) {
      next();
    } else {
      if (!error) return res.status(422).json({ error: "Something went wrong" });

      const { details } = error;
      const message = details.map(i => i.message).join(',');

      res.status(422).json({ error: message })
    }
  }
}