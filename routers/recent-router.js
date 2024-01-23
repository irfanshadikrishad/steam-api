import { Router } from "express";
import {
  recent,
  upcoming,
  topSeller,
} from "../controllers/recent-controller.js";

const router = Router();

router.get("/recent", recent);
router.get("/upcoming", upcoming);
router.get("/topseller", topSeller);

export default router;
