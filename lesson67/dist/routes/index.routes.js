import { Router } from "express";
import userRoutes from "./user.routes.js";
const router = Router();
router.get("/users", userRoutes);
export default router;
//# sourceMappingURL=index.routes.js.map