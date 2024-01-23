import { config } from "dotenv";
import express from "express";
import cors from "cors";
import chalk from "chalk";
import userRouter from "./routers/user-router.js";
import listRouter from "./routers/lists-router.js";

config();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use("/api/v1", userRouter);
app.use("/api/v1", listRouter);

app.listen(PORT, () => {
  console.log(chalk.cyan(`[listen] ${PORT}`));
});
