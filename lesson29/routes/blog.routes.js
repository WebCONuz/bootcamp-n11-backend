import { Router } from "express";
import { getAllPosts } from "../controllers/blog.controller.js";

const router = Router();

router.get("/", getAllPosts);

export default router;
