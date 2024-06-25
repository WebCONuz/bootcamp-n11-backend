// import express, { Express, Request, Response, Application } from "express";
// import dotenv from "dotenv";

// dotenv.config();
// const app: Application = express();

// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to Express & TypeScript Server");
// });

// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   console.log(`Server is Fire at http://localhost:${port}`);
// });

let num: any = 300;
let num2 = num as string;
let num3 = <string>num;
num2 = "aaa";
num3 = "bbb";
console.log(typeof num3, num3);
