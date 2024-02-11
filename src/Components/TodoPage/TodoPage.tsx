import React from 'react'
import { TodoListPage } from '../../Types/Types'
import './TodoPage.css'

const TodoPage: React.FC<TodoListPage> = (props: TodoListPage) => {
  return (
    <div className='page'>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <p>{props.content}</p>
      <p>{props.data.toDateString()}</p>
      <p>{props.urgent}</p>
      <div className='button-container'>
        <button className='button-delete'>Delete</button>
        <button className='button'>Done</button>
      </div>
    </div>
  )
}

export default TodoPage
