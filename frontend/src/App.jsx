import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/pages/login/Login'
import SignUp from './components/pages/signup/SignUp'
import Home from './components/pages/home/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
