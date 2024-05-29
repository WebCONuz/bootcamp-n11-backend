class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(res, errorMessage) {
    return res.send(400, {
      message: errorMessage.message,
      friendlyMsg: errorMessage.friendlyMsg,
    });
  }

  static unauthorized(res, message, friendlyMsg) {
    return res.send(401, message, friendlyMsg);
  }

  static forbidden(res, message, friendlyMsg) {
    return res.send(403, message, friendlyMsg);
  }

  static notFound(res, message, friendlyMsg) {
    return res.send(404, message, friendlyMsg);
  }

  static internal(res, errorMessage) {
    return res.send(errorMessage.status || 500, {
      message: errorMessage.msg,
      friendlyMsg: errorMessage.friendlyMsg,
    });
  }
}

export default ApiError;
