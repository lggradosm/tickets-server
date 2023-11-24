import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProcedureSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  floor: {
    type: Number,
  },
  items: {
    type: [String],
  },
});

export const Procedure = model("Procedure", ProcedureSchema);
