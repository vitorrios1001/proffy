import apisauce from 'apisauce'

const api = apisauce.create({
  baseURL: process.env.REACT_APP_HOST_API
})

export default api
