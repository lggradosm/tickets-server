import mongoose from "mongoose";
import { Ticket } from "../models/Ticket.js";
import { QueueService } from "./QueueService.js";
export class TicketService {
  async create(ticket) {
    ticket._id = new mongoose.Types.ObjectId();
    const queueService = new QueueService();
    const queueCounter = await queueService.getByProcedure(ticket.procedure);
    ticket.code = queueCounter.initials + (queueCounter.counter + 1) + "";
    await Ticket(ticket).save();
    const newTicket = await Ticket.findById(ticket._id);
    await queueService.addTicket(ticket.procedure, ticket._id);
    return newTicket;
  }

  async getAll() {
    return Ticket.find({}).populate("procedure").exec();
  }
}
