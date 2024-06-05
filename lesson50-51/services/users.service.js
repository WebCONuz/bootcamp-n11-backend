import User from "../models/users.model.js";

const getAll = async () => {
  // throw new Error("Some error");
  try {
    const u = await User.find();
    return u;
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (params) => {
  try {
    const u = await User.find({ _id: params });
    return u;
  } catch (error) {
    console.log(error);
  }
};

const getOneByParams = async (data) => {
  try {
    const u = await User.findOne(data);
    return u;
  } catch (error) {
    console.log(error);
  }
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
    refresh_token: data.refresh_token || oldData.refresh_token,
  });
  await oldData.save();
  return oldData;
};

const oneUpdate = async (oldData, newData) => {
  const data = await User.findOneAndUpdate(oldData, newData, { new: true });
  return data;
};

const activate = async (id) => {
  const oldData = await User.updateOne(
    { _id: id },
    {
      isActive: true,
    }
  );
  if (!oldData) {
    return false;
  }
  return oldData;
};

const remove = async (id) => {
  const delData = await User.findByIdAndDelete(id);
  if (!delData) return false;
  return delData;
};

export default {
  getAll,
  getOne,
  getOneByParams,
  create,
  update,
  oneUpdate,
  remove,
  activate,
};
