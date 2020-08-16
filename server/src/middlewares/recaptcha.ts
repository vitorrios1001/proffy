import { Request, Response, NextFunction } from 'express'
import { recaptchaApi } from '../services/request'
import config from '../config'

const { RECAPTCHA: { SECRET_KEY }, NODE_ENV } = config

interface ResponseRecaptcha {
  success: boolean
  hostname?: string
  score?: number
  challenge_ts?: string
  'error-codes': string[]
}

const validateRecaptcha = async (req: Request, res: Response, next: NextFunction) => {
  if (NODE_ENV === 'development') {
    next()
  }

  const { recaptcha } = req.body

  if (!recaptcha) {
    res.status(400).json({ error: 'reCaptcha is required' })
  }

  const { data } = await recaptchaApi.post<ResponseRecaptcha>(`/siteverify?secret=${SECRET_KEY}&response=${recaptcha}`)
  
  console.log('recaptcha', data)

  if (data?.success) {
    next()
  }

  return res.status(400).json({ error: 'Recaptcha is refused'})
}

export { validateRecaptcha }