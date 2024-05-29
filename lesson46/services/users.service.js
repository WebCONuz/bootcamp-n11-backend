import User from "../models/users.model.js";

const getAll = () => {
  // throw new Error("Some error");
  return User.find();
};

const create = async (data) => {
  const newData = new User(data);
  await newData.save();
  return newData;
};

const update = async (id, data) => {
  const oldData = await User.findById(id);
  if (!oldData) {
    return false;
  }
  oldData.set({
    email: data.email || oldData.email,
    phone: data.phone || oldData.phone,
    password: data.password || oldData.password,
    card: data.card || oldData.card,
    address: data.address || oldData.address,
    description: data.description || oldData.description,
    full_name: data.full_name || oldData.full_name,
    isActive: data.isActive || oldData.isActive,
  });
  await oldData.save();
  return oldData;
};

export default {
  getAll,
  create,
  update,
};
