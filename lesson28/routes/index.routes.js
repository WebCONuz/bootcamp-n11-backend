import { Router } from "express";
import booksRoutes from "./books.routes.js";
import authorRoutes from "./author.routes.js";
const route = Router();

route.use("/api/books", booksRoutes);
route.use("/api/author", authorRoutes);

export default route;
