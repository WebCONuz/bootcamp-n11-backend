import { Router } from "express";
import {
  getProfile,
  registerUser,
  loginUser,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/:info", getProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
