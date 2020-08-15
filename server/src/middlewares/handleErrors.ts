import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import logger from 'winston'

import {
  APIException,
  Forbidden,
  InvalidParameter,
  NotFound,
  Unauthorized,
} from '../helpers/exceptions'
import config from '../config'

interface ErrorResponse {
  code: number
  message: string
  errors?: object
  stack?: string
}

const convertToException = (err: any): APIException | Forbidden | InvalidParameter | NotFound | Unauthorized => {
  if (err && err.error && err.error.isJoi) {
    return new InvalidParameter(undefined, err.error.toString())
  }

  if (!(err instanceof APIException)) {
    return new APIException()
  }

  return err
}

export const handleErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
  let response: ErrorResponse = {
    code: httpStatus.INTERNAL_SERVER_ERROR,
    message: 'Something bad happened.',
  }

  const { status, errors, stack, message } = convertToException(err)

  const responseStatus = errors.status || status

  response = {
    ...response,
    code: responseStatus,
    errors,
    message,
    stack,
  }

  if (config.NODE_ENV === 'development') {
    delete response.stack
  }

  if (Object.entries(errors).length === 0 && errors.constructor === Object) {
    delete response.errors
  }

  logger.error(`${responseStatus} ${response.message}`, { url: req.originalUrl })

  return res
    .status(response.code)
    .json(response)
    .end()
}