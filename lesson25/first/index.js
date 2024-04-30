import http from "http";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import getBodyData from "./utils.js";

dotenv.config();
const port = process.env.PORT || 3001;

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      city: "Gwenborough",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      bs: "harness real-time e-markets",
    },
  },
];

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.method === "POST" && req.url === "/users") {
    const reqBody = await getBodyData(req);
    const data = reqBody.split("&");
    let sendData = {
      id: 1,
      fistname: data[0]?.split("=")?.[1],
      lastname: data[1]?.split("=")?.[1],
    };
    res.end(JSON.stringify(sendData));
  } else if (req.method === "GET" && req.url === "/create") {
    const filePath = path.join(process.cwd(), "views", "createUser.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(filePath, "utf8", (err, content) => {
      if (err) throw err;
      else res.end(content);
    });
  } else {
    const filePath = path.join(process.cwd(), "views", "notFound.html");
    fs.readFile(filePath, "utf8", (err, content) => {
      if (err) throw err;
      else res.end(content);
    });
  }
});

server.listen(port, (err) => {
  if (err) throw err;
  else console.log(`Server ${port}-portda ishga tushdi`);
});
