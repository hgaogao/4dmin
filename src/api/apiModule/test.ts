import Request from '@/api/baseRequest'

enum testApi {
  test = '/pet/',
}

const controller = new AbortController()
const test = () => {
  return Request.request<{ code: number; data: object } >({
    method: 'get',
    url: testApi.test + 1,
    signal: controller.signal,
    headers: {
      'X-Custom-Header': 'okok',
    },
    interceptor: {
      requestInterceptor: (config) => {
        return config
      },
      responseInterceptor: (response) => {
        return response
      },
    },
  })
}
setTimeout(() => {
  controller.abort()
}, 1500)
export { test }
