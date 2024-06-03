import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.routes.js";
import { connect } from "mongoose";
import { useError } from "./middlewares/ErrorHandling.js";
import logger from "./utits/logger.js";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());

// main routes
app.use("/api", routes);

process.on("uncaughtException", (ex) => {
  console.log("uncaughtException", ex.message);
  process.exit(1);
});

// Albatta xatoni oxirida tekshirish kerak
process.on("unhandledRejection", (ex) => {
  console.log("unhandledRejection", ex);
  process.exit(1);
});

// console.log("console");
// logger.log("info", "logger");
// logger.error("error logger");
// logger.warn("warning logger");

// Albatta xatoni oxirida tekshirish kerak
app.use(useError);

// start project
const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL;

// run project
const start = async () => {
  await connect(DB_URL);
  app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
};

start();
