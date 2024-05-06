import path from "path";
import fs from "fs";

export const getProfile = async (req, res) => {
  // read from db
  const filePath = path.join(process.cwd(), "db", "users.json");
  let data = fs.readFile(filePath, "utf8");
  const users = JSON.parse(data);
  const userInfo = req.params.info;

  // check exsist
  const user = users?.find(
    (item) =>
      item.id == userInfo || item.email == userInfo || item.username == userInfo
  );
  if (!user) {
    return res.status(404).send({
      status: "Not Found",
    });
  }

  // response
  res.status(200).send({
    status: "OK",
    data: user,
  });
};

export const registerUser = async (req, res) => {
  // check data
  const { username, password, fullname, age, email, gender } = req.body;
  if (!username || !password || !fullname || !age || !email || !gender) {
    return res.status(400).send({
      status: "Bad request",
      data: "Ma'lumotlar to'liq emas",
    });
  }

  // check isRegister last
  const filePath = path.join(process.cwd(), "db", "users.json");
  const data = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(data);
  const oldUser = users?.find((item) => item.email == email);
  if (oldUser) {
    return res.status(400).send({
      status: "Bad request",
      data: "Bunday foydalanuvchi mavjud",
    });
  }

  // add to database
  const newUser = {
    id: users?.length + 1,
    ...req.body,
  };
  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users), "utf8");
  res.status(201).send({
    status: "Created",
    data: newUser,
  });
};

export const loginUser = async (req, res) => {
  // check data
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({
      status: "Bad request",
      data: "Ma'lumotlar to'liq emas",
    });
  }

  // find user
  const filePath = path.join(process.cwd(), "db", "users.json");
  const data = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(data);
  const oldUser = users?.find((item) => item.email == email);
  if (!oldUser) {
    return res.status(400).send({
      status: "Bad request",
      data: "Email yoki password xato!",
    });
  }

  // check password
  if (oldUser.password != password) {
    return res.status(404).send({
      status: "Bad request",
      data: "Email yoki password xato!",
    });
  }

  res.status(200).send({
    status: "Login",
  });
};
