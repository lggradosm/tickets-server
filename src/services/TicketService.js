import mongoose from "mongoose";
import { Ticket } from "../models/Ticket.js";
import { QueueService } from "./QueueService.js";
import { getIo } from "../util/socket.js"
export class TicketService {
  io = getIo()
  async create(data) {
    try{
      const ticket = {
        _id:  new mongoose.Types.ObjectId(),
        code: "",
        procedure: null
      };
      const queueService = new QueueService();
      const queueCounter = await queueService.getByProcedureId(data._id);
      ticket.procedure = queueCounter.procedure;
      ticket.code = `${queueCounter.initials}${queueCounter.counter + 1}`;
      await Ticket(ticket).save();
      const newTicket = await Ticket.findById(ticket._id);
      const queueList = await queueService.addTicket(ticket.procedure, ticket._id);
      this.io.to(ticket.procedure._id+"").emit("queue",queueList);
      return newTicket;
    }catch(error) {
      console.error(error)
      throw error;
    }
    
  }

  async getAll() {
    return Ticket.find({}).populate("procedure").exec();
  }
}
