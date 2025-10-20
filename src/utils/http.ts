import qs from 'qs'
import { addToast } from '@heroui/toast'

export const request = async (
  url: string, 
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', 
  headers: any | undefined = undefined, 
  params: any | undefined = undefined, 
  body: any | undefined = undefined, 
) => {
  if (headers) {
    headers['Content-Type'] = 'application/json'
  } else {
    headers = {
      'Content-Type': 'application/json'
    }
  }
  const config: RequestInit = {
    method,
    headers,
    body
  }
  const response = await fetch(`${url}?${qs.stringify(params)}`, config)
  if (response.status >= 200 && response.status < 300) {
    const responseData = await response.json()
    if (responseData.code === 0) {
      return responseData
    }
    addToast({
      title: '请求错误',
      description: responseData.msg,
      color: 'danger'
    })
    return
  }
  addToast({
    title: '请求错误',
    description: `HTTP Error code: ${response.statusText}`,
    color: 'danger'
  })
}