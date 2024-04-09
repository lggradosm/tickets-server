import { PrinterService } from "../services/PrinterService.js"

export class PrinterController{
  async getIp(req,res){
    const printerService = new PrinterService();
    try {
      const ip = await printerService.getIp();
      res.send(ip);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}