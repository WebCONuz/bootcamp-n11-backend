const authAdmin = (req, res, next) => {
  const data = true;
  if (data) {
    console.log("Auth middleware ishladi");
    next();
  } else {
    return res.status(401).send({
      statusText: "UNAUTHORIZED",
      message: "Ro'yxatdan o'tmagan",
    });
  }
};

export default authAdmin;
