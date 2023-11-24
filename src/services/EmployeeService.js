import mongoose from "mongoose";
import { Employee } from "../models/Employee.js";
import { ProcedureService } from "./ProcedureService.js";
ProcedureService;
export const createEmployee = async (employee) => {
  // Employee.create(employee)
  //   .then(() => {
  //     return employee._id;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return new Error();
  //   });
  employee._id = new mongoose.Types.ObjectId();
  const procedure = await new ProcedureService().getById(employee.procedure);
  employee.procedure = procedure;
  return Employee.create(employee);
};

export const getEmployees = async () => {
  return await Employee.find({}).populate("procedure").exec();
};

export const getEmployeeById = async (id) => {
  return await Employee.findOne({ _id: id });
};

export const updateEmployee = () => {};

export const deleteEmployee = async (id) => {
  return await Employee.findOneAndDelete(id);
};
