import Article from "../models/articles.model.js";

const getAll = () => {
  return Article.find();
};

const create = async (data) => {
  const newData = new Article(data);
  await newData.save();
  return newData;
};

const update = async (id, data) => {
  const oldData = await Article.findById(id);
  if (!oldData) return false;
  oldData.set({
    email: data.title || oldData.title,
    author_id: data.author_id || oldData.author_id,
    text: data.text || oldData.text,
    description: data.description || oldData.description,
    isActive: data.isActive || oldData.isActive,
  });
  await oldData.save();
  return oldData;
};

const remove = async (id) => {
  const delData = await Article.findByIdAndDelete(id);
  if (!delData) return false;
  return delData;
};

export default {
  getAll,
  create,
  update,
  remove,
};
