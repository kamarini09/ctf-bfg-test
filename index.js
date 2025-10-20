import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "SERVER";

app.get("/", (_req, res) => {
  res.send(`Hello from ${APP_NAME}!`);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
