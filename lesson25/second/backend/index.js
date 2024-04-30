import http from "http";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3001;

const tasks = [
  {
    id: 1,
    name: "Saharlarda uyg'onish",
    status: "completed",
    date: "22.05.2024, 20:15",
  },
];

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
  console.log(req.method, req.url);

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
  } else if (req.method === "POST" && req.url === "/tasks") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      let reqBody;
      reqBody = JSON.parse(body);
      let sendData = { id: tasks.length + 1, ...reqBody };
      tasks.push(sendData);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ status: "OK", data: sendData }));
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("404. Data is not found");
  }
});

server.listen(port, (err) => {
  if (err) throw err;
  else console.log(`Server ${port}-portda ishga tushdi`);
});
