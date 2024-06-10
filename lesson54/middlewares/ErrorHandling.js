import ApiError from "../errors/ApiError.js";

export const useError = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  if (
    err.message.includes("Unexpected token") ||
    err.message.includes("jwt expired")
  ) {
    return res.status(err.status || 401).json({ message: err.message });
  }
  return res.status(500).json({ message: "Nazarda tutilmagan xatolik" });
};
