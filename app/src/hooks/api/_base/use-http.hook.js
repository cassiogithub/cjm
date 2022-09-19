import { useUserGlobal } from '../../../context'
import axios from 'axios'
export function useHttp(baseURL, headers) {
  const [, setUserGlobal] = useUserGlobal()
  const instance = axios.create({
    baseURL,
    headers,
  })

  async function get(url) {
    try {
      const response = await instance.get(url)
      return response.data
    } catch (error) {
      if (error.response.status === 401) {
        setUserGlobal({})
      }
      throw error
    }
  }

  async function post(url, data) {
    try {
      const response = await instance.post(url, data)
      return response.data
    } catch (error) {
      if (error.response.status === 401) {
        setUserGlobal({})
      }
      throw error
    }
  }

  async function put(url, data) {
    try {
      const response = await instance.put(url, data)
      return response.data
    } catch (error) {
      if (error.response.status === 401) {
        setUserGlobal({})
      }
      throw error
    }
  }

  return {
    get,
    post,
    put,
  }
}
