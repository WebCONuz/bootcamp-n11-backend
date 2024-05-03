export const getAllAuthors = (req, res) => {
  res.status(200).send({
    status: "OK",
  });
};

export const getOneAuthor = (req, res) => {
  res.status(200).send({
    status: "OK",
  });
};
export const createAuthor = (req, res) => {
  res.status(201).send({
    status: req.body,
  });
};
export const editAuthor = (req, res) => {
  res.status(200).send({
    status: req.body,
  });
};
