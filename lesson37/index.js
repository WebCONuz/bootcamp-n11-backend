import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.routes.js";
import { connect } from "mongoose";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());

// main routes
app.use("/api", routes);

// start project
const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL;

const start = async () => {
  await connect(DB_URL);
  app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
};

start();
