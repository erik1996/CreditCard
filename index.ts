import express from "express";
import { connectDb } from "./db/dbSetup";
import appRouter from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 3005;

// * Routes * //
app.use(appRouter);

// * Start * //
connectDb().then(async () => {
  app.listen(port, () => console.log(`listening on port ${port}!`));
});

export default app;
