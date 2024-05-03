export const getAllBooks = (req, res) => {
  res.status(200).send({
    status: "OK",
  });
};

export const getOneBook = (req, res) => {
  res.status(200).send({
    status: "OK",
  });
};
export const createBook = (req, res) => {
  res.status(201).send({
    status: req.body,
  });
};
export const editBook = (req, res) => {
  res.status(200).send({
    status: req.body,
  });
};
