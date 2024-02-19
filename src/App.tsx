import { useCallback, useEffect, useState } from 'react'
import TodoBoard from './Components/TodoBoard/TodoBoard.tsx'
import './App.css'
import { UserData } from './Types/Types.ts'
import { getUser, sightIn, sightOut } from './api/api.ts'
import Loader from './Components/Loader/Loader.tsx'
import Background from './Components/Background/Background.tsx'

function App() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(false)

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

  const handleLogin = async (emailName: string, password: string) => {
    setLoading(true)
    const result = await sightIn(emailName, password)
    if (!result) {
      alert('Wrong name or password')
      setLoading(false)
      return false
    }
    const user = await getUser()
    setUserData(user)
    setLoading(false)
    return true
  }

  const handleLogOut = async () => {
    setLoading(true)
    const result = await sightOut()
    if (!result) {
      alert('Error')
      setLoading(false)
      return false
    }
    setUserData(null)
    setLoading(false)
    return true
  }

  const fetchData = useCallback(async () => {
    setLoading(true)
    const result = await getUser()
    setUserData(result)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) {
    return (
      <>
        <Loader size='loading' />
      </>
    )
  }

  return (
    <>
      <Background />
      <div className='main-wrap'>
        <TodoBoard userData={userData} handleLogin={handleLogin} handleLogOut={handleLogOut} />
      </div>
    </>
  )
}

export default App
