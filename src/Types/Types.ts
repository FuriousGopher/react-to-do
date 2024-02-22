export interface TaskModel {
  id: number
  taskName: string
  author: string
  description: string
  issueData: Date
  deadline: Date
  comment: string
  priority: string
  attachment: string //TODO what for data ?
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

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  handleSubmit: () => void
}
