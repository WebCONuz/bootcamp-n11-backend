import {
  getAllArticles,
  createArticles,
  updateArticles,
  deleteArticle,
} from "../controllers/articles.controller.js";
import { Router } from "express";
const router = Router();

router.get("/", getAllArticles);
router.post("/register", createArticles);
router.put("/:id", updateArticles);
router.delete("/:id", deleteArticle);

export default router;
