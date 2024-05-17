import {
  getAllCourses,
  createCourse,
} from "../controllers/course.controller.js";
import authAdmin from "../middlewares/auth.js";
import { Router } from "express";
const router = Router();

router.get("/", authAdmin, getAllCourses);
router.post("/", authAdmin, createCourse);

export default router;
