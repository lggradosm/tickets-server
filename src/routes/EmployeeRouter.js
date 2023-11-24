import express from "express";
import {
  create,
  deleteById,
  getAll,
  getById,
  update,
} from "../controller/EmployeeController.js";
const router = express.Router();

router.get("", getAll);
router.get("/:id", getById);
router.put("", update);
router.delete("", deleteById);

export default router;
