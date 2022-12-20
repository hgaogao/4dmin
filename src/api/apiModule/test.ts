import Request from '@/api/index'

enum testApi {
  test = '/pet/1',
}
const test = Request.request<any>({
  method: 'get',
  url: testApi.test,
  interceptor: {
    requestInterceptor: (config) => {
      return config
    },
    responseInterceptor: (response) => {
      return response
    },
  },
}).then((result) => {
  console.log('example', result.code)
  console.log('example', result.data.id)
  console.log('example', result.data.name)
}).catch((err) => {
  console.log('example', err)
})

export { test }
