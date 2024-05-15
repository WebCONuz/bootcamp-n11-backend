import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.routes.js";
import createViewPath from "./utils/createViewPath.js";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(express.static("public"));

// add view engine
app.set("view engine", "ejs");

// routes
app.use("/api", routes);

// Pages
app.get("/", (req, res) => {
  res.render(createViewPath("index"), {
    page: "Home page",
  });
});

app.get("/about", (req, res) => {
  res.render(createViewPath("about"), {
    page: "About page",
  });
});

// start project
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
