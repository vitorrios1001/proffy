import httpStatus from 'http-status'

class APIException extends Error {
  constructor(
    public errors: any = {},
    public message: string = 'Ops! Something went wrong.',
    public status: number = httpStatus.INTERNAL_SERVER_ERROR,
  ) {
    super(message)
    this.name = this.constructor.name
    if (message) {
      this.message = message
    }
    if (status) {
      this.status = status
    }
    Error.captureStackTrace(this, this.constructor)
  }
}

class Forbidden extends APIException {
  constructor(errors?: any, message?: string) {
    super(errors, message || 'Forbidden.', httpStatus.FORBIDDEN)
  }
}

class InvalidParameter extends APIException {
  constructor(errors?: any, message?: string) {
    super(errors, message || 'Invalid Request.', httpStatus.BAD_REQUEST)
  }
}

class NotFound extends APIException {
  constructor(errors?: any, message?: string) {
    super(errors, message || 'Not Found.', httpStatus.NOT_FOUND)
  }
}

class Unauthorized extends APIException {
  constructor(errors?: any, message?: string) {
    super(errors, message || 'Unauthorized.', httpStatus.UNAUTHORIZED)
  }
}

export {
  APIException,
  Forbidden,
  InvalidParameter,
  NotFound,
  Unauthorized,
}