import userService from "../services/users.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.status(200).send({ status: "OK", data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};

export const createUsers = async (req, res) => {
  try {
    const { email, phone, password, card, address, description, full_name } =
      req.body;
    if (!phone || !password) {
      return res.status(400).send({ status: "BAD REQUEST" });
    }
    const user = await userService.create({
      email,
      phone,
      password,
      card,
      address,
      description,
      full_name,
      isActive: true,
    });
    res.status(201).send({ status: "OK", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};

export const updateUsers = async (req, res) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    if (user) {
      res.status(200).send({ status: "UPDATED", data: user });
    } else {
      res.status(400).send({ status: "User is not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};
