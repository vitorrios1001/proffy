import apisauce from 'apisauce'

const recaptchaApi = apisauce.create({ baseURL: 'https://www.google.com/recaptcha/api/' })

export { recaptchaApi }