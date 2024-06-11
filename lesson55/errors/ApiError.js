class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(res, errorMessage) {
    return res.status(400).json({
      message: errorMessage.message,
      friendlyMsg: errorMessage.friendlyMsg,
    });
  }

  static unauthorized(res, message, friendlyMsg) {
    return res.status(401).json(message, friendlyMsg);
  }

  static forbidden(res, message, friendlyMsg) {
    return res.status(403).json(message, friendlyMsg);
  }

  static notFound(res, message, friendlyMsg) {
    return res.status(404).json(message, friendlyMsg);
  }

  static internal(res, errorMessage) {
    return res.status(500).json({
      message: errorMessage.message,
      friendlyMsg: errorMessage.friendlyMsg,
    });
  }
}

export default ApiError;
