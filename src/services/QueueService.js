import mongoose from "mongoose";
import { Queue } from "../models/Queue.js";
import { ProcedureService } from "./ProcedureService.js";
export class QueueService {
  async getAll() {
    return await Queue.find().populate("procedure").exec();
  }

  async save(queue) {
    queue._id = new mongoose.Types.ObjectId();
    const procedure = await new ProcedureService().getById(queue.procedure);
    queue.procedure = procedure._id;
    return await Queue.create(queue);
  }

  async getByProcedureId(id) {
    return await Queue.findOne({ procedure: id })
      .populate("procedure")
      .populate("ticket")
      .exec();
  }

  async getByProcedure(procedure) {
    return await Queue.findOne({ procedure: procedure });
  }

  async addTicket(procedure, ticket) {
    return await Queue.findOneAndUpdate(
      { procedure: procedure },
      { $push: { ticket: ticket }, $inc: { counter: 1 } },
      { new: true }
    );
  }

  async nextTicket() {
    return null;
  }
}
