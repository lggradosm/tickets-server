import { TicketService } from "../services/TicketService.js";

export class TicketController {
  async create(req, res) {
    const ticketService = new TicketService();
    const ticket = req.body;
    try {
      const newTicket = await ticketService.create(ticket);
      res.json(newTicket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    const ticketService = new TicketService();
    try {
      const tickets = await ticketService.getAll();
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
