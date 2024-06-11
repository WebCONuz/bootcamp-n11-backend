import { Schema, model } from "mongoose";

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Article = model("articles", schema);
export default Article;
