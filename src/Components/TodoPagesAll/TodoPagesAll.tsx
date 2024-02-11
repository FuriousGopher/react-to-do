import React from 'react'
import { TodoListPage } from '../../Types/Types'
import './TodoPagesAll.css'

const TodoPagesAll: React.FC<TodoListPage> = (props: TodoListPage) => {
  return (
    <div className='all-page'>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <p>{props.content}</p>
      <p>{props.data.toDateString()}</p>
      <p>{props.urgent}</p>
    </div>
  )
}

export default TodoPagesAll
