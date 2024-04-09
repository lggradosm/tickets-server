import express from "express";
import ProcedureController from "../controller/ProcedureController.js";
const router = express.Router();
const procedureController = new ProcedureController();
router.get("", procedureController.getAll);
router.get("/:id",procedureController.getById)
export default router;
