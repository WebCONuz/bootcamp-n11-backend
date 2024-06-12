import {
  getAllUsers,
  createUsers,
  updateUsers,
  loginUsers,
  deleteUser,
  activateUsers,
  refresh,
  logout,
} from "../controllers/users.controller.js";
import authAdmin from "../middlewares/authAdmin.js";
import { Router } from "express";
const router = Router();

router.get("/", getAllUsers);
router.get("/logout", logout);
router.get("/refresh", refresh);
router.get("/activate", activateUsers);
router.post("/register", createUsers);
router.post("/login", loginUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUser);

export default router;
