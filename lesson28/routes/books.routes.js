import { Router } from "express";
import {
  getAllBooks,
  getOneBook,
  createBook,
  editBook,
} from "../controllers/books.controller.js";
const route = Router();

route.get("/", getAllBooks);
route.get("/:id", getOneBook);
route.post("/create", createBook);
route.put("/:id", editBook);

export default route;
