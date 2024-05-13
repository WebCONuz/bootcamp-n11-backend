import query from "../utils/db.js";

export const getAllCourses = async (req, res) => {
  try {
    const result = await query("SELECT * FROM courses");
    res.status(200).send({ status: "OK", data: result.rows });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Enternal server error" });
  }
};

export const getOneCourses = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await query("SELECT * FROM courses WHERE id=$1", [id]);
    res.status(200).send({ status: "OK", data: result.rows[0] });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Enternal server error" });
  }
};

export const createCourse = async (req, res) => {
  try {
    const { name, price, author, duration } = req.body;
    const result = await query(
      "INSERT INTO courses (name, price, author, duration) VALUES ($1, $2, $3, $4)",
      [name, price, author, duration]
    );
    res.status(200).send({ status: "OK", data: result.rows[0] });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Enternal server error" });
  }
};
