import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.routes.js";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api", routes);

// start project
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
