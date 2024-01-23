import { Router } from "express";
import { recent, upcoming } from "../controllers/recent-controller.js";

const router = Router();

router.get("/recent", recent);
router.get("/upcoming", upcoming);

export default router;
