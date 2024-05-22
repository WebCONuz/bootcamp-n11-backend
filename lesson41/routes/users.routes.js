import {
  getAllUsers,
  createUsers,
  updateUsers,
} from "../controllers/users.controller.js";
import authAdmin from "../middlewares/auth.js";
import { Router } from "express";
const router = Router();

router.get("/", authAdmin, getAllUsers);
router.post("/register", createUsers);
router.put("/:id", updateUsers);

export default router;
