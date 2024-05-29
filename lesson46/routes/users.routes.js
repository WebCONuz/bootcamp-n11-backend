import {
  getAllUsers,
  createUsers,
  updateUsers,
  loginUsers,
} from "../controllers/users.controller.js";
import authAdmin from "../middlewares/authAdmin.js";
import { Router } from "express";
const router = Router();

router.get("/", authAdmin, getAllUsers);
router.post("/register", createUsers);
router.post("/login", loginUsers);
router.put("/:id", updateUsers);

export default router;
