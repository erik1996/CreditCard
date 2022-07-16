import mongoose from "mongoose";

// Connect to MongoDB
export const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
