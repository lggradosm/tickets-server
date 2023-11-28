import express from "express";
import {
  create,
  getAll,
  signIn,
  verify,
} from "../controller/UserController.js";
import { verifyToken } from "../middlewares.js/jwt.js";
const router = express.Router();

router.get("", getAll);
router.post("", create);
router.post("/login", signIn);
router.post("/verify", verify);
export default router;
