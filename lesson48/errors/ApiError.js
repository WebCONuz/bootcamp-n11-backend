class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(res, errorMessage) {
    return res.json(400, {
      message: errorMessage.message,
      friendlyMsg: errorMessage.friendlyMsg,
    });
  }

  static unauthorized(res, message, friendlyMsg) {
    return res.json(401, message, friendlyMsg);
  }

  static forbidden(res, message, friendlyMsg) {
    return res.json(403, message, friendlyMsg);
  }

  static notFound(res, message, friendlyMsg) {
    return res.json(404, message, friendlyMsg);
  }

  static internal(res, errorMessage) {
    return res.json(errorMessage.status || 500, {
      message: errorMessage.msg,
      friendlyMsg: errorMessage.friendlyMsg,
    });
  }
}

export default ApiError;
