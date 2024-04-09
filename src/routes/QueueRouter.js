import express from "express";
import { QueueController } from "../controller/QueueController.js";

const router = express.Router();
const queueController = new QueueController();
router.post("/", queueController.save);
router.get("/", queueController.getAll);
router.get("/:id", queueController.getByProcedureId);
router.post("/add", queueController.addTicket);
router.get("/next/:id",queueController.next)
export default router;
