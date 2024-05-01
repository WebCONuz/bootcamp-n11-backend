import http from "http";
import url from "url";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3001;

// DATA SET
const tasks = [
  {
    id: 1,
    name: "Learn EJS and express",
    status: "completed",
    date: "22.05.2024",
  },
];

// SERVER
const server = http.createServer(async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // HandShake
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // CRUD
  if (req.method === "GET" && req.url === "/tasks") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(tasks));
    res.end();
  } else if (req.method === "GET" && req.url.match(/\/(\d+)$/)) {
    //        /tasks/15
    const parsedUrl = url.parse(req.url, true);
    const id = parsedUrl.pathname.split("/")[2];
    const task = tasks.find((item) => item.id == id);
    if (task) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ status: "OK", data: task }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ status: "Not found" }));
    }
    res.end();
  } else if (req.method === "POST" && req.url === "/tasks") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      let reqBody = JSON.parse(body);
      let sendData = { id: tasks.length + 1, ...reqBody };
      tasks.push(sendData);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ status: "OK", data: sendData }));
      res.end();
    });
  } else if (req.method === "PUT" && req.url.match(/\/(\d+)$/)) {
    const parsedUrl = url.parse(req.url, true);
    const id = parsedUrl.pathname.split("/")[2];
    const oldTask = tasks.find((item) => item.id == id);

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      let reqBody = JSON.parse(body);
      if (oldTask) {
        tasks.forEach((item) => {
          if (item.id == id) {
            item.name = reqBody.name || item.name;
            item.status = reqBody.status || item.status;
            item.date = reqBody.date || item.date;
          }
        });
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ status: "UPDATED" }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ status: "Not found" }));
      }
      res.end();
    });
  } else if (req.method === "DELETE" && req.url.match(/\/(\d+)$/)) {
    const parsedUrl = url.parse(req.url, true);
    const id = parsedUrl.pathname.split("/")[2];
    const task = tasks.find((item) => item.id == id);
    if (task) {
      tasks.splice(id - 1, 1);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ status: "OK" }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ status: "Not found" }));
    }
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end({ status: "BAD REQUEST" });
  }
});

server.listen(port, (err) => {
  if (err) throw err;
  else console.log(`Server ${port}-portda ishga tushdi`);
});
