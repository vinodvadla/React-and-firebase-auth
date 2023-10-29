import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import { auth } from './Firebase'
function App() {
  const [userName, setUserName] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName)
      } else {
        setUserName("")
      }
    })
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/home' element={<Home user={userName} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
