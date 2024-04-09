import {Printer} from "../models/Printer.js"
export class PrinterService{
  async getIp(){
    return await Printer.findOne({})
  }
}