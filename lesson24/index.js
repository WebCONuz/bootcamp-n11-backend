// import {
//   readLogStream,
//   writeLogStream,
//   duplexLogStream,
//   transformLogStream,
// } from "./modules/stream.js";

// readLogStream(false);
// writeLogStream(false);
// duplexLogStream(false);
// transformLogStream(false);

import http from "http";
import path from "path";
import fs from "fs";

import dotenv from "dotenv";
dotenv.config();

const data = [
  { id: 1, userName: "javokhir", password: 12345, email: "java@gmail.com" },
  { id: 2, userName: "jamol", password: 10345, email: "jama@email.com" },
  { id: 3, userName: "salim", password: 1222, email: "sama@yahoo.com" },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
  } else if (req.method === "GET" && req.url === "/file") {
    const filePath = path.join(process.cwd(), "files", "test.txt");
    fs.readFile(filePath, "utf8", (err, content) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  }
});

const port = process.env.PORT || 4400;
server.listen(port, () => console.log("Server ishga tushdi:", port));
