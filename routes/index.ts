import { Router } from 'express';
import cardRouter from './card.router';

const appRouter = Router();

appRouter.use('/card', cardRouter)

export default appRouter;