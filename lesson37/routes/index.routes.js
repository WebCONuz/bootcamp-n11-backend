import { Router } from "express";
const router = Router();
import courseRouter from "./course.routes.js";

router.use("/course", courseRouter);

export default router;
