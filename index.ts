import express from 'express';
import { connectDb } from './data/dbSetup';
import appRouter from './routes'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3005;

// * Routes * //
app.use(appRouter);

// * Start * //
connectDb().then(async () => {
	app.listen(port, () => console.log(`listening on port ${port}!`));
});