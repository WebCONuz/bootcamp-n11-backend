import { Schema, model } from "mongoose";

const schema = new Schema(
  {
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
    full_name: {
      type: String,
      required: true,
    },
    role: {
      type: [String],
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
    userActivationLink: String,
    refresh_token: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model("users", schema);
export default User;
