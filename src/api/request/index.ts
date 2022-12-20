import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { Interceptors, RequestConfig } from './types'
class Request {
  axiosInstance: AxiosInstance
  constructor(config: RequestConfig) {
    this.axiosInstance = axios.create(config)

    config.interceptor && this.useInterceptors(config.interceptor)
  }

  // 请求方法
  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
    // 请求的拦截器
      if (config.interceptor?.requestInterceptor)
        config = config.interceptor.requestInterceptor(config)

      this.axiosInstance.request(config).then((res) => {
      // 响应的拦截器
        if (config.interceptor?.responseInterceptor)
          res = config.interceptor.responseInterceptor(res)
        // 这里的res类型推导为AxiosResponse<T>，但是在上面的拦截器中，我们已经将res.data返回了，所以这里的res类型应该是T
        resolve(res as unknown as T)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  /**
   * 注册拦截器
   * @param interceptors
   */
  useInterceptors(interceptors: Interceptors) {
    // 请求拦截器 2
    this.axiosInstance.interceptors.request.use(
      interceptors?.requestInterceptor,
      interceptors?.requestInterceptorCatch,
    )

    // 全局请求拦截器 1
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // console.log('全局请求拦截器')
        return config
      },
    )

    // 全局响应拦截器 3
    this.axiosInstance.interceptors.response.use(
      (res) => {
        // console.log('全局响应拦截器')
        return res.data
      },
    )

    // 响应拦截器 4
    this.axiosInstance.interceptors.response.use(
      interceptors?.responseInterceptor,
      interceptors?.responseInterceptorCatch,
    )
  }
}
export default Request
