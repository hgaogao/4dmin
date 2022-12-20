import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 拦截器
interface Interceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 在config里添加拦截器属性
interface RequestConfig extends AxiosRequestConfig {
  interceptor?: Interceptors
}

export type {
  RequestConfig,
  Interceptors,
}
