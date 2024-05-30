import { Schema, model } from "mongoose";

const schema = new Schema({
  title: {
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
  author_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Article = model("Article", schema);
export default Article;
