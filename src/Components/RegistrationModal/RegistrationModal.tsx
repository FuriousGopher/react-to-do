import './RegistrationModal.css'
import { FC, useState } from 'react'
import * as Modal from 'react-modal'

interface RegistrationModal {
  isOpen: boolean
  onClose: () => void
}

const RegistrationModal: FC<RegistrationModal> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleRegistration = () => {
    console.log('Registration data:', email, name, password)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='modal'
      overlayClassName='modal-overlay'
      ariaHideApp={false}
    >
      <div className='modal-header'>
        <h2>Login</h2>
      </div>
      <div className='modal-content'>
        <label>
          Email:
          <input
            type='email'
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Repeat Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div className='modal-footer'>
        <button className='login-button' onClick={handleRegistration}>
          Login
        </button>
        <button className='close-button' onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  )
}

export default RegistrationModal
