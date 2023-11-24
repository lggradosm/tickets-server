import mongoose from "mongoose";
const { Schema, model } = mongoose;
const TicketSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    code: {
      type: String,
    },
    procedure: {
      type: Schema.Types.ObjectId,
      ref: "Procedure",
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  },
  { timestamps: true }
);

export const Ticket = model("Ticket", TicketSchema);
