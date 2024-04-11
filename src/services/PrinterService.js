import {Printer} from "../models/Printer.js"
export class PrinterService{
  async getIp(){
    return await Printer.findOne({})
  }
  async changeIp(ip){
    return await Printer.findOneAndUpdate(    
      {},
      { ip: ip  },
      { new: true }
    );
  }
}