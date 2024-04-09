import express from "express";
import { PrinterController } from "../controller/PrinterController.js"

  const router = express.Router();
  const printerController = new PrinterController();

  router.get("", printerController.getIp);
  export default router;