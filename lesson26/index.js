import express from "express";
import dotenv from "dotenv";

// activete env variables
dotenv.config();

// data
const users = [
  {
    id: 1,
    name: "Alisher",
    age: 23,
    login: "alisher@gmail.com",
    password: "111111",
  },
  { id: 2, name: "Vali", age: 24, login: "vali@email.com", password: "222222" },
  { id: 3, name: "G'ani", age: 25, login: "gani@mail.ru", password: "333333" },
  {
    id: 4,
    name: "Jamil",
    age: 26,
    login: "jamil@yahoo.com",
    password: "444444",
  },
];

// create server
const app = express();

// create custom middleware
const myLogger = function (req, res, next) {
  console.log("This is LOG middleware");
  next();
};

// MIDDLEWARES
app.use(myLogger); // custom middleware
app.use(express.json()); // json-stringify middleware

// -----------------------------------------------------------------------------
// CRUD ------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Get all users
app.get("/users", (req, res) => {
  return res.status(200).json({
    status: "OK",
    message: "Success",
    data: users,
  });
});

// Get one user by id
app.get("/users/:id", (req, res) => {
  const userId = req.params.id; // url dagi id shu yo'l bilan olinadi
  const user = users.find((item) => item.id == userId);
  if (!user) {
    return res.status(404).json({
      message: "Bunday user mavjud emas",
    });
  }

  return res.status(200).json({
    status: "OK",
    data: user,
  });
});

// Add user
app.post("/users", (req, res) => {
  const { name, age, login, password } = req.body; // frontdan yuborilgan data shunday qabul qilib olinadi
  if (!name || !age || !login || !password) {
    return res
      .status(400)
      .json({ message: "Yuborilgan ma'lumotlar to'liq emas." });
  }

  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  return res.status(201).json({ status: "CREATED", data: newUser });
});

// Update user
app.put("/users/:id", (req, res) => {
  const userId = req.params.id; // url dagi id shu yo'l bilan olinadi
  const { name, age, login, password } = req.body; // frontdan yuborilgan data shunday qabul qilib olinadi
  const oldUser = users.find((item) => item.id == userId);
  if (!oldUser) {
    return res.status(404).json({ message: "Bunday user mavjud emas" });
  }

  if (!name || !age || !login || !password) {
    return res
      .status(400)
      .json({ message: "Yuborilgan ma'lumotlar to'liq emas" });
  }

  users.forEach((item) => {
    if (item.id == userId) {
      item.name = name || oldUser.name;
      item.age = age || oldUser.age;
      item.login = login || oldUser.login;
      item.password = password || oldUser.password;
    }
  });
  return res.status(200).json({ status: "UPDATED", data: { id: userId } });
});

// Delete user
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id; // url dagi id shu yo'l bilan olinadi
  const oldUser = users.find((item) => item.id == userId);
  if (!oldUser) {
    return res.status(404).json({ message: "Bunday user mavjud emas" });
  }
  users.splice(userId - 1, 1);
  return res.status(200).json({ status: "DELETED", data: { id: userId } });
});

// listen server
const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port: ${port}`);
});
