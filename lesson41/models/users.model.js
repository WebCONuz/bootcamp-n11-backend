import { Schema, model } from "mongoose";

const schema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  card: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  full_name: {
    type: String,
    required: true,
  },
});

const User = model("User", schema);
export default User;
