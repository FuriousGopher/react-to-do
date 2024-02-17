import * as Modal from 'react-modal'
import './RegistrationModal.css'
import { FC, useState } from 'react'
import { FaEye, FaUser } from 'react-icons/fa'
import { MdAlternateEmail, MdOutlinePassword } from 'react-icons/md'

interface RegistrationModal {
  isOpen: boolean
  onClose: () => void
}

const RegistrationModal: FC<RegistrationModal> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegistration = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match! Please try again.')
      return
    }

    console.log('Registration data:', email, name, password)

    setEmail('')
    setName('')
    setPassword('')
    setConfirmPassword('')
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
          <h2>Registration</h2>
        </div>
        <div className='modal-content'>
          <div className='input-box'>
            <input
              placeholder='Email'
              type='email'
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdAlternateEmail className='icon' />
          </div>
          <div className='input-box'>
            <input
              placeholder='User name'
              type='text'
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              minLength={8}
              maxLength={9}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaEye className='icon' onClick={handleTogglePassword} />
            ) : (
              <MdOutlinePassword
                className='icon'
                onClick={handleTogglePassword}
              />
            )}
          </div>
          <div className='input-box'>
            <input
              placeholder='Confirm password'
              type='password'
              minLength={8}
              maxLength={9}
              required={true}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <MdOutlinePassword className='icon' />
          </div>
        </div>
        <div className='modal-footer'>
          <button className='login-button' onClick={handleRegistration}>
            Registration
          </button>
        </div>
        <div className='register-link'>
          <p>
            Already have account? <a href='#'>Login</a>
          </p>
        </div>
      </form>
    </Modal>
  )
}

export default RegistrationModal
