import { ProcedureService } from "../services/ProcedureService.js";
export default class ProcedureController {
  async add(req, res) {
    const procedureService = new ProcedureService();
    const procedure = req.body;
    try {
      procedureService.add(procedure);
      res.send(`Procudure ${procedure._id} was created`);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    const procedureService = new ProcedureService();
    try {
      const procedures = await procedureService.getAll();
      res.send(procedures);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req,res) {
    const procedureService = new ProcedureService();
    const id = req.params.id;
    try {
      const procedure = await procedureService.getById(id);
      res.json(procedure);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
