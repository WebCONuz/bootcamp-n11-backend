import { Schema, model } from "mongoose";

const schema = new Schema({
  experience: {
    type: String,
  },
  lastJobPlace: {
    type: String,
  },
  salary: {
    type: String,
  },
  online: {
    type: Boolean,
    default: false,
  },
  offer: {
    type: String,
  },
  step: {
    type: Number,
    default: 0,
  },
});

const jobs = model("jobs", schema);
export default jobs;
