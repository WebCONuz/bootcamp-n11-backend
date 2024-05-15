import {
  getAllCourses,
  getOneCourses,
  createCourse,
} from "../controllers/course.controller.js";
import { Router } from "express";
const router = Router();

router.get("/", getAllCourses);
router.get("/:id", getOneCourses);
router.post("/", createCourse);

export default router;
