import mongoose from "mongoose";

const { Schema, model } = mongoose;

const QueueSchema = new Schema({
  _id: Schema.Types.ObjectId,
  procedure: {
    type: Schema.Types.ObjectId,
    ref: "Procedure",
    unique: true,
  },
  counter: {
    type: Number,
  },
  initials: {
    type: String,
    unique: true,
  },
  ticket: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket",
      unique: true,
    },
  ],
});

export const Queue = model("Queue", QueueSchema);
