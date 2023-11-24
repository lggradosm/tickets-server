import express from "express";
import TicketRouter from "../routes/TickerRouter.js";
import EmployeeRouter from "../routes/EmployeeRouter.js";
import UserRouter from "../routes/UserRouter.js";
import ProcedureRouter from "../routes/ProcedureRouter.js";
import QueueRouter from "../routes/QueueRouter.js";
const router = express.Router();

router.use("/tickets", TicketRouter);
router.use("/employees", EmployeeRouter);
router.use("/users", UserRouter);
router.use("/procedures", ProcedureRouter);
router.use("/queues", QueueRouter);

export default router;
