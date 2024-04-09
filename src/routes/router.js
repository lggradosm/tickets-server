import express from "express";
import TicketRouter from "../routes/TickerRouter.js";
import EmployeeRouter from "../routes/EmployeeRouter.js";
import ProcedureRouter from "../routes/ProcedureRouter.js";
import QueueRouter from "../routes/QueueRouter.js";
import PrinterRouter from "../routes/PrinterRouter.js";

const router = express.Router();

router.use("/tickets", TicketRouter);
router.use("/employees", EmployeeRouter);
router.use("/procedures", ProcedureRouter);
router.use("/queues", QueueRouter);
router.use("/printer", PrinterRouter);

export default router;
