import express from "express";
import { TicketController } from "../controller/TicketController.js";

const router = express.Router();
const ticketController = new TicketController();
router.post("/", ticketController.create);
router.get("/", ticketController.getAll);

export default router;
