import { useEffect, useState } from 'react'
import TodoBoard from './Components/TodoBoard/TodoBoard.tsx'
import './App.css'
function App() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const storedData = localStorage.getItem('account')

    if (storedData) {
      const parsedData = JSON.parse(storedData)
      setUserData(parsedData)
      console.log('Data found:', parsedData)
    }
    console.log('Data not found')
  }, [])

  return (
    <>
      <div className='background'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='main-wrap'>
        <TodoBoard userData={userData} />
      </div>
    </>
  )
}

export default App
