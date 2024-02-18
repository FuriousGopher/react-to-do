import * as Modal from 'react-modal'
import './LoginModal.css'
import { FC, useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { ModalProps } from '../../Types/Types.ts'

interface LoginModalProps extends Omit<ModalProps, 'handleSubmit'> {
  handleSubmit: (emailName: string, password: string) => void
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, handleSubmit }) => {
  const [emailName, setEmailName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    handleSubmit(emailName, password)
    onClose()
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='modal'
      overlayClassName='modal-overlay'
      ariaHideApp={false}
    >
      <form>
        <div className='modal-header'>
          <h2>Login</h2>
        </div>
        <div className='modal-content'>
          <div className='input-box'>
            <input
              placeholder='User name or email'
              type='text'
              value={emailName}
              required={true}
              onChange={(e) => setEmailName(e.target.value)}
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaEyeSlash className='icon' onClick={handleTogglePassword} />
            ) : (
              <FaEye className='icon' onClick={handleTogglePassword} />
            )}
          </div>
        </div>
        <div className='remember-forgot'>
          <label>
            <input type={'checkbox'} />
            Remember me
          </label>
          <a href='#'>Forgot password?</a>
        </div>
        <div className='modal-footer'>
          <button className='login-button' onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className='register-link'>
          <p>
            Don't have account? <a href='#'>Register</a>
          </p>
        </div>
      </form>
    </Modal>
  )
}

export default LoginModal
