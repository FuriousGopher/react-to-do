export interface TodoListPage {
  id: number
  title: string
  author: string
  content: string
  data: Date
  urgent: string
}

export interface UserRegistrationDto {
  username: string
  password: string
  email: string
}

export interface UserData {
  id: number
  name: string
}
