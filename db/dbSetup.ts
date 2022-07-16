import mongoose from "mongoose";

// Connect to MongoDB
export const connectDb = () => {
  let dbUrl = process.env.DATABASE_HOST || "";
  return mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// mongodb://mongo:27017/node-api
