import axios, { AxiosError, AxiosResponse } from 'axios'
import { TodoListPage, UserData, UserRegistrationDto } from '../Types/Types.ts'

const baseURL = 'https://apiUrl'

const handleError = (error: AxiosError) => {
  if (error.response) {
    console.error('Response Error:', error.response.data)
  } else if (error.request) {
    console.error('Request Error:', error.request)
  } else {
    console.error('Error:', error.message)
  }
}

export const axiosHelper = axios.create({
  baseURL,
  withCredentials: true,
})

export const getPages = async (path: string): Promise<TodoListPage[]> => {
  try {
    const response: AxiosResponse = await axiosHelper.get(path)
    return response.data
  } catch (error) {
    handleError(error)
    throw error
  }
}

export const getUser = async (): Promise<UserData | null> => {
  try {
    const result = await promisifyWithDelay(localStorage.getItem.bind(localStorage), ['account'])
    if (result) {
      return JSON.parse(result)
    }
    return null
  } catch (e) {
    console.log(e)
    return null
  }
}

export const sightIn = async (emailName: string, password: string) => {
  if (emailName === 'Rick' && password === '0000') {
    const result = await promisifyWithDelay(localStorage.setItem.bind(localStorage), [
      'account',
      JSON.stringify({
        name: 'Rick',
        id: '0',
      }),
    ])
    if (!result) return true
  }
  return false
}

export const sightOut = async () => {
  const result = await promisifyWithDelay(localStorage.removeItem.bind(localStorage), ['account'])
  return !result
}

export const deleteData = async (path: string): Promise<void> => {
  try {
    await axiosHelper.delete(path)
  } catch (error) {
    handleError(error)
    throw error
  }
}

export const putData = async (path: string, data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await axiosHelper.put(path, data)
    return response.data
  } catch (error) {
    handleError(error)
    throw error
  }
}

export const authenticateUser = async (credentials: { username: string; password: string }): Promise<any> => {
  try {
    return axiosHelper.post('/auth', credentials)
  } catch (error) {
    handleError(error)
    throw error
  }
}

export const registration = async (credentials: {
  username: string
  password: string
  email: string
}): Promise<UserRegistrationDto> => {
  try {
    return axiosHelper.post('/registration', credentials)
  } catch (error) {
    handleError(error)
    throw error
  }
}

const promisifyWithDelay = <F extends (...args: any[]) => any>(
  callback: F,
  params: Parameters<F>,
  delay: number = 1000,
  shouldReject: boolean = false,
): Promise<ReturnType<F> | string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject('Error occurred')
      }
      const result = callback(...params)
      console.log(result)
      resolve(result)
    }, delay)
  })
}
