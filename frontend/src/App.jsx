import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const App = () => {
  const authUser = useSelector(state => state.auth.authUser);
  return (
    <>
      <Routes>
        <Route path='/home' element={authUser ? <Home /> : <Navigate to='/login' />} />
        <Route path='/signup' element={authUser ? <Navigate to='/home' /> : <SignUp />} />
        <Route path='/login' element={authUser ? <Navigate to='/home' /> : <Login />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
