import mongoose from "mongoose";
import { Queue } from "../models/Queue.js";
import { ProcedureService } from "./ProcedureService.js";
import { getIo } from "../util/socket.js";
export class QueueService {
  io = getIo();
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
    ).populate("ticket");
  }

  async nextTicket(procedureId, ventanilla) {
    try {
      const queue = await Queue.findOne({ procedure: procedureId }).populate(
        "ticket"
      );
      if (!queue) {
        throw new Error(
          "No se encontró la cola para el procedimiento especificado."
        );
      }
      if (queue.ticket.length > 0) {
        const ticket = queue.ticket[0];
        this.io.emit("mensaje", { code: ticket.code, ventanilla: ventanilla });

        queue.ticket.shift();

        const queueList = await queue.save();
        this.io.to(procedureId).emit("queue", queueList);
        return ticket;
      }
      return null;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async resetQueues(password) {
    if (password === "notariaguerra") {
      const queueList = await Queue.updateMany(
        {},
        { $set: { ticket: [], counter: 0 } },
        { new: true }
      );
      const queue = await Queue.find();
      this.io.emit("reset", queue);
      return queue;
    }
    return null;
  }
}
