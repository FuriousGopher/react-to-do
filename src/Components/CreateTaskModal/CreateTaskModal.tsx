import { FC, SetStateAction, useState } from 'react'
import { ModalProps, UserData } from '../../Types/Types.ts'
import './CreateTaskModal.css'
import * as Modal from 'react-modal'

interface CreateTaskModalProps extends Omit<ModalProps, 'handleSubmit'> {
  account: UserData | null
}

const CreateTaskModal: FC<CreateTaskModalProps> = ({ isOpen, onClose, account }) => {
  const [taskName, setTaskName] = useState('')
  const [description, setDescription] = useState('')
  const [, setDeadline] = useState(new Date().toISOString().split('T')[0])
  const [comment, setComment] = useState('')
  const [priority, setPriority] = useState('Low')

  const options = ['Medium', 'High']

  const handleDropdownChange = (event: { target: { value: SetStateAction<string> } }) => {
    setPriority(event.target.value)
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
              placeholder={'Task Title'}
              type='text'
              required={true}
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className='create-task-body'>
            <div className='create-task-first-line'>
              <h4>Task owner: {account?.name}</h4>
              <div className='priority-drop'><label htmlFor="dropdown">Priority</label>
                <select id="dropdown" value={priority} onChange={handleDropdownChange}>
                  <option value="Low">Low</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="create-task-description">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Enter task description..."
                value={description}
                required={true}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className='create-task-dates'>
              <p>Issue date: {new Date().toLocaleDateString()}</p>
              <label htmlFor='deadline'>Deadline</label>
              <input type='date' required={true} onChange={(e) => setDeadline(e.target.value)} />
            </div>
            <div className='create-task-comment'>
              <label htmlFor='comment'>Comments</label>
              <textarea
                id='comment'
                value={comment}
                placeholder='Leave your comment if needed...'
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className='create-task-attachment'>
              <label htmlFor='attachment'>Attachments</label>
              <input type='file' />
            </div>
            <div className='create-task-footer'>
              <button className='button-save-later'>Save for draft</button>
              <button className='button-create-task'>Create</button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default CreateTaskModal
