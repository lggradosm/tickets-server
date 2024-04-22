import { QueueService } from "../services/QueueService.js";

export class QueueController {
  async getAll(req, res) {
    const queueService = new QueueService();
    try {
      const queue = await queueService.getAll();
      res.json(queue);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async save(req, res) {
    const queueService = new QueueService();
    const queue = req.body;
    try {
      await queueService.save(queue);
      res.json("created");
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getByProcedureId(req, res) {
    const queueService = new QueueService();
    const id = req.params.id;
    try {
      const queue = await queueService.getByProcedureId(id);
      res.json(queue);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async addTicket(req, res) {
    const { procedure, ticket } = req.body;
    const queueService = new QueueService();
    try {
      const queue = await queueService.addTicket(procedure, ticket);
      res.json(queue);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async next(req,res) {
    const {procedureId,ventanilla} = req.body;
    const queueService = new QueueService();    
    try {
      const queue = await queueService.nextTicket(procedureId,ventanilla);
      res.json(queue);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async resetQueue(req,res){
    const {password} = req.body
    const queueService = new QueueService();
    try {
      const queue = await queueService.resetQueues(password);
      if(queue !== null) {
        res.json(200);
      }else{
        res.json(400);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
