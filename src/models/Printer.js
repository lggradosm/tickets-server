import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PrinterSchema = new Schema({
  _id: Schema.Types.ObjectId,
  ip: {
    type: String,
  }
});

export const Printer = model("Printer", PrinterSchema);
