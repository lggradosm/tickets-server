import mongoose from "mongoose";

const { Schema, model } = mongoose;

const EmployeeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  procedure: {
    type: Schema.Types.ObjectId,
    ref: "Procedure",
  },
});

export const Employee = model("Employee", EmployeeSchema);
