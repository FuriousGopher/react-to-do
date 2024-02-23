import { FC, useState } from 'react'
import { TaskModel } from '../../Types/Types'
import './TodoPage.css'
import CustomToast from '../CustomToast/CustomToast.tsx'
import { getPriorityColorClass } from '../../helpers/helpers.ts'
import { ImCross } from 'react-icons/im'

const TaskPage: FC<TaskModel> = (props: TaskModel) => {
  const [showToast, setShowToast] = useState(false)

  const handleDoneClick = () => {
    setShowToast((prev) => !prev)
  }

  const handlePostponeClick = () => {
    setShowToast((prev) => !prev)
  }

  return (
    <>
      <div className='task-main-board'>
        <div className='delete-task' onClick={handleDoneClick}>
          <ImCross className='icon' />
        </div>
        <div className='task-title'>{props.taskName}</div>
        <div className='content'>
          <div className='priority'>
            <div className='issue-data'>Issue Data: {props.issueData.toDateString()}</div>
            <div className={`priority-text ${getPriorityColorClass(props.priority)}`}>Priority: {props.priority}</div>
          </div>
          <div className='description'>{props.description}</div>
          <div className='dates'>
            <div className='dead-line'>Dead Line: {props.deadline.toDateString()}</div>
          </div>
          <div className='attachment'>{'attachment Name'}</div>
          {/*//TODO attachment name how ?*/}
        </div>
        <div className='task-board-bottom'>
          {/*TODO how to make stick to the bottom ? */}
          <button className='del-postpone' onClick={handlePostponeClick}>
            Postpone
          </button>
          <button className='task-done-button' onClick={handleDoneClick}>
            Done
          </button>
        </div>
      </div>
      {showToast && <CustomToast message='Great job' />}
    </>
  )
}

export default TaskPage
