import axios, { AxiosRequestConfig } from 'axios'
import { REQUEST_TIMEOUT } from '../settings'
import { showMessage } from '../utils'
import store from '@/store'

interface RequestConfig extends AxiosRequestConfig {
  loading?: boolean
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
  timeout: REQUEST_TIMEOUT
})

axiosInstance.interceptors.request.use((config: RequestConfig) => {
  config.loading && store.commit('widget/SHOW_LOADING')
  return config
})

axiosInstance.interceptors.response.use((response) => {
  const { success, message }: {
    success: boolean,
    message: string
  } = response.data
  store.commit('widget/HIDE_LOADING')

  if (!success) {
    showMessage({
      type: 'error',
      message
    })
    return response
  }

  return {
    origin: response,
    ...response.data
  }
}, (error) => {
  console.log(error)
})

export const request = axiosInstance

export default (config: RequestConfig) => axiosInstance(config)
