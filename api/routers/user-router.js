import { Router } from "express";
import { user } from "../controllers/user-controller.js";

const router = Router();

router.get("/user/:id", user);

export default router;
