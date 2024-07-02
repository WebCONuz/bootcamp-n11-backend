import express from "express";
import routes from "./routes/index.routes.js";
import { sequelize } from "./db/index.js";

const app = express();

app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3051;
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Server DB ga ulandi`);
  } catch (error) {
    console.log(error);
  }
  app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishga tushdi`);
  });
};

start();
