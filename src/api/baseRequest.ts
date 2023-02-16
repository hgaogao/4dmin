import Request from './request'
import { BASE_API } from './request/config'

const baseRequest = new Request({
  baseURL: BASE_API,
  timeout: 100000,
  interceptor: {
    requestInterceptor: (config) => {
      // console.log('实例请求拦截器')
      return config
    },
    responseInterceptor: (res) => {
      // console.log('实例响应拦截器')
      return res
    },
    responseInterceptorCatch: (error) => {
      return error
    },
    requestInterceptorCatch: (error) => {
      return error
    },
  },
})

export default baseRequest
