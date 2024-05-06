import { Router } from "express";
import blogRoutes from "./blog.routes.js";
import usersRoutes from "./users.routes.js";

const router = Router();

router.use("/blog", blogRoutes);
router.use("/users", usersRoutes);

export default router;
