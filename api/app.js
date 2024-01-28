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
    methods: ["GET"],
  })
);
app.use("/api/v1", userRouter);
app.use("/api/v1", listRouter);

app.get("/", async (req, res) => {
  res.status(200).json({ status: 200 });
});

app.listen(PORT, () => {
  console.log(chalk.cyan(`[listen] ${PORT}`));
});
