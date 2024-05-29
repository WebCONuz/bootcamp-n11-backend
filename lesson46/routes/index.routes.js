import { Router } from "express";
const router = Router();
import usersRouter from "./users.routes.js";

router.use("/users", usersRouter);

export default router;
