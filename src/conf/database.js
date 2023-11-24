import mongoose from "mongoose";

export const connect = () => {
  const MONGO_DATABASE = process.env.MONGO_DATABASE;
  const MONGO_HOST = process.env.MONGO_HOST;
  const MONGO_PORT = process.env.MONGO_PORT;
  const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
  mongoose
    .connect(MONGO_URI)
    .then((db) => console.log("Database is connected"))
    .catch((err) => console.log(err));
};
