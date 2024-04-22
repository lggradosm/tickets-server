import mongoose from "mongoose";

export const connect = () => {
  const MONGO_DATABASE = "guerrasalas_db";
  const MONGO_HOST = "mongodb";
  // const MONGO_HOST = "localhost";
  const MONGO_PORT = 27017;

  const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

  mongoose
    .connect(MONGO_URI)
    .then((db) => console.log("Database is connected"))
    .catch((err) => console.log(err));
};
