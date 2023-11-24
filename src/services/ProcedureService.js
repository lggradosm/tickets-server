import { Procedure } from "../models/Procedure.js";
import mongoose from "mongoose";

export class ProcedureService {
  async add(procedure) {
    procedure._id = new mongoose.Types.ObjectId();
    console.log("ok");
    return await Procedure.create(procedure);
  }
  async getAll() {
    return await Procedure.find();
  }

  async getById(id) {
    return await Procedure.findById(id);
  }
}
