import { Router } from "express";
import {
  getAllAuthors,
  getOneAuthor,
  createAuthor,
  editAuthor,
} from "../controllers/author.controller.js";
const route = Router();

route.get("/", getAllAuthors);
route.get("/:id", getOneAuthor);
route.post("/create", createAuthor);
route.put("/:id", editAuthor);

export default route;
