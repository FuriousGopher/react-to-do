import axios, { AxiosResponse, AxiosError } from 'axios'
import { TodoListPage, UserRegistrationDto } from '../Types/Types.ts'

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

export const getUser = async (userId: number): Promise<any> => {
  return getPages(`/users/${userId}`)
}

export const authenticateUser = async (credentials: {
  username: string
  password: string
}): Promise<any> => {
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
