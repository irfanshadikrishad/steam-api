import { Router } from "express";
import { recent } from "../controllers/recent-controller.js";

const router = Router();

router.get("/recent", recent);

export default router;
