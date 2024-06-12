import {
  getAllArticles,
  createArticles,
  updateArticles,
  deleteArticle,
} from "../controllers/articles.controller.js";
import upload from "../utits/fileUpload.js";
import { Router } from "express";
const router = Router();

router.get("/", getAllArticles);
router.post("/", upload.single("image"), createArticles);
router.put("/:id", updateArticles);
router.delete("/:id", deleteArticle);

export default router;
