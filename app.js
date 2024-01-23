import { config } from "dotenv";
import express from "express";
import chalk from "chalk";
import userRouter from "./routers/user-router.js";
import initRouter from "./routers/recent-router.js";

config();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use("/api/v1", userRouter);
app.use("/api/v1", initRouter);

app.listen(PORT, () => {
  console.log(chalk.cyan(`[listen] ${PORT}`));
});
