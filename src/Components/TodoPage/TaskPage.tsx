import { FC, useState } from 'react'
import { TaskModel } from '../../Types/Types'
import './TodoPage.css'
import CustomToast from '../CustomToast/CustomToast.tsx'

const TaskPage: FC<TaskModel> = (props: TaskModel) => {

  const [showToast, setShowToast] = useState(false);

  const handleDoneClick = () => {
    setShowToast((prev) => !prev);

  };

  return (
    <>
      <div className='task-main-board'>
        <div className='task-title'>{props.taskName}</div>
        <div className='content'>
          <div className='priority'>{props.priority}</div>
          <div className='description'>{props.description}</div>
          <div className='dates'>
            <div className='issue-data'>{props.issueData.toLocaleDateString()}</div>
            <div className='dead-line'>{props.deadline.toLocaleDateString()}</div>
          </div>
          <div className='attachment'>{'attachment Name'}</div>
        </div>
        <div className='task-board-bottom'>
          <button className='del-postpone'>Delete or Postpone</button>
          <button className='task-done-button'  onClick={handleDoneClick}>Done</button>
        </div>
      </div>
      {showToast && <CustomToast message="Great job"/>}
    </>
  )
}

export default TaskPage
