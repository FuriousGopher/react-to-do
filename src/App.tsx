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
    const result = await sightOut()
    if (!result) {
      alert('Error')
      setLoading(false)
      return false
    }
    setUserData(null)
    return
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
