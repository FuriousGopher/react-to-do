import { FC, SetStateAction, useState } from 'react'
import { ModalProps } from '../../Types/Types.ts'
import './CreateTaskModal.css'
import * as Modal from 'react-modal'

const CreateTaskModal: FC<ModalProps> = ({ isOpen, onClose, account }) => {
  const [taskName, setTaskName] = useState('New Task')
  const [description, setDescription] = useState('')
  const [, setDeadLine] = useState(new Date().toISOString().split('T')[0])
  const [comment, setComment] = useState()
  const [urgent, setUrgent] = useState('Low')

  const options = ['Low', 'Medium', 'High']

  const handleDropdownChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setUrgent(event.target.value)
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className='modal'
        overlayClassName='modal-overlay'
        ariaHideApp={false}
      >
        <form>
          <div className='create-task-header'>
            <input
              placeholder={taskName}
              type='text'
              required={true}
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className='create-task-body'>
            <div className='create-task-first-line'>
              <h4>Task owner: {account}</h4> //TODO check what to do when no
              user data
              {/*//TODO check why
              props like this ?*/}
              <label htmlFor='dropdown'>How urgent is it? </label>
              <select
                id='dropdown'
                value={urgent}
                onChange={handleDropdownChange}
              >
                <option value=''>Low</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className='create-task-description'>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                placeholder='Enter task description...'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className='create-task-dates'>
              <p>Issue date {new Date().toLocaleDateString()}</p>
              <input
                placeholder='Dead Line'
                type='date'
                required={true}
                onChange={(e) => setDeadLine(e.target.value)}
              />
            </div>
            <div className='create-task-comment'>
              <label htmlFor='comment'>Comments</label>
              <textarea
                id='comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className='create-task-attacment'>
              <input type='file' />
            </div>
            <div className='create-task-footer'>
              <button>Save for draft</button>
              <button>Create</button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default CreateTaskModal
