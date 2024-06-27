import express, { Request, Response, NextFunction } from "express";

const PORT = 3000;
const app = express();

app.get("/api/user", (req: Request, res: Response) => {
  res.status(200).send({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
