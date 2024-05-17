import { Schema, model } from "mongoose";

const schema = new Schema({
  title: String,
  teacher: String,
  time: Date,
});

const Course = model("Course", schema);

export const createCourse = async (req, res) => {
  try {
    const { theme, author, date } = req.body;

    const newCourse = await Course({ title: theme, teacher: author });
    await newCourse.save();

    res.status(201).send({
      statusText: "CREATED",
      data: newCourse,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllCourses = (req, res) => {
  try {
    res.status(200).send({ status: "OK" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Enternal server error" });
  }
};
