import { Router } from "express";
const router = Router();
import responseRouter from "./article.routes.js";
import usersRouter from "./users.routes.js";
import articlesRouter from "./article.routes.js";

router.use(responseRouter);
router.use("/users", usersRouter);
router.use("/aticles", articlesRouter);

export default router;
