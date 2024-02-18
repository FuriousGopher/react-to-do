import { useEffect, useState } from 'react'
import TodoBoard from './Components/TodoBoard/TodoBoard.tsx'
import './App.css'
import { UserData } from './Types/Types.ts'

function App() {
  const [userData, setUserData] = useState<UserData | null>()
  const [loading, setLoading] = useState(true)

  /*  rngSystem = {
    color: #E45A84,
    top: 88%,
    left: 42%,
    animation-duration: 144s,
  animation-delay: -147s,
  transform-origin: 13vw -20vh,
  box-shadow: -22vmin 0 2.9032404350386813vmin currentColor
  }
  function RenderBalls( {amount}) {
    return (
      // while number render
    <span ></span> //TODO make a loop and make a // or cretae a component wich will do all this stuff  on lick add bubel. and random size and animation in react component
    )
  }*/

  useEffect(() => {
    const fetchData = async () => {
      const storedData = localStorage.getItem('account')

      if (storedData) {
        const parsedData = JSON.parse(storedData)
        setUserData(parsedData)
      }

      setLoading(false)
    }

    // Simulating a delay of 1000 milliseconds (1 second)
    const delay = 500
    setTimeout(fetchData, delay)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

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
