import express from "express";
import { connectDb } from "./db/dbSetup";
import appRouter from "./routes";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT;

// * Routes * //
app.use(appRouter);

// * Start * //
connectDb().then(async () => {
  app.listen(port, () => console.log(`listening on port ${port}!`));
});

export default app;
