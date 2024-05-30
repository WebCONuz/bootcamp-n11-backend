import {
  getAllUsers,
  createUsers,
  updateUsers,
  loginUsers,
  deleteUser,
} from "../controllers/users.controller.js";
import authAdmin from "../middlewares/authAdmin.js";
import { Router } from "express";
const router = Router();

router.get("/", authAdmin, getAllUsers);
router.post("/register", createUsers);
router.post("/login", loginUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUser);

export default router;
