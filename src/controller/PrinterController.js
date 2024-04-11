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

  async changeIp (req,res){
    const printerService = new PrinterService();
    const {ip} = req.body;
    try {
      const data = await printerService.changeIp(ip);
      res.send(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}