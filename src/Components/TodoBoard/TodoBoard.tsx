import { useEffect, useState } from 'react'
import TodoPage from '../TodoPage/TodoPage.tsx'
import './TodoBoard.css'
import { getPages } from '../../api/api.ts'
import { TodoListPage, UserData } from '../../Types/Types.ts'
import TodoPagesAll from '../TodoPagesAll/TodoPagesAll.tsx'
import LoginModal from '../LoginModal/LoginModal.tsx'
import CreateTaskModal from '../CreateTaskModal/CreateTaskModal.tsx'
import RegistrationModal from '../RegistrationModal/RegistrationModal.tsx'

const TodoBoard = ({
  userData,
  handleLogin,
  handleLogOut,
}: {
  userData: UserData | null
  handleLogin: (name: string, password: string) => Promise<boolean>
  handleLogOut: () => void
}) => {
  const [todoPages, setTodoPages] = useState([
    {
      id: 1,
      title: 'title',
      content: 'content',
      data: new Date(),
      author: 'author',
      urgent: 'very',
    },
    {
      id: 2,
      title: 'title2',
      content: 'content',
      data: new Date(),
      author: 'author',
      urgent: 'very',
    },
    {
      id: 3,
      title: 'title3',
      content: 'content',
      data: new Date(),
      author: 'author',
      urgent: 'very',
    },
    {
      id: 4,
      title: 'title4',
      content: 'content',
      data: new Date(),
      author: 'author',
      urgent: 'very',
    },
  ] as TodoListPage[])
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false)

  const handleLoginClick = () => {
    setIsLoginModalOpen(true)
  }

  const handleCreateTaskClick = () => {
    setIsCreateTaskModalOpen(true)
  }

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true)
  }

  const handleLogoutClick = () => {
    handleLogOut()
  }

  const closeModal = () => {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(false)
    setIsCreateTaskModalOpen(false)
  }

  useEffect(() => {
    const fetchTodoPages = async () => {
      try {
        const getTodoPages = await getPages('get')
        setTodoPages(getTodoPages)
      } catch (error) {
        console.error('Error fetching todo pages:', error)
      }
    }

    fetchTodoPages()
  }, [])

  return (
    <div>
      <h1 className='board-title'>Todo Board</h1>
      {userData ? (
        <>
          <div className='board-header'>
            <button className='board-button' onClick={handleLogoutClick}>
              Logout
            </button>
          </div>
          <div className='create-task-button'>
            <button className='board-button' onClick={handleCreateTaskClick}>
              Create Task
            </button>
          </div>
        </>
      ) : (
        <div className='board-header'>
          <button className='board-button' onClick={handleLoginClick}>
            Login
          </button>
          <button className='board-button' onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      )}
      <div className='todo-pages'>
        {todoPages.map((todoPage: TodoListPage, index: number) => (
          <TodoPage key={index} {...todoPage} />
        ))}
      </div>
      <div className='all-pages'>
        {todoPages.map((todoPage: TodoListPage, index: number) => (
          <div key={index} className='page'>
            <TodoPagesAll {...todoPage} />
          </div>
        ))}
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} handleSubmit={handleLogin} />
      <RegistrationModal isOpen={isRegisterModalOpen} onClose={closeModal} handleSubmit={() => {}} />
      <CreateTaskModal isOpen={isCreateTaskModalOpen} onClose={closeModal} account={userData} />
    </div>
  )
}

export default TodoBoard
