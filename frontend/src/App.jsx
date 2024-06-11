import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import User from './components/Users/User'
import SearchUser from './components/Users/SearchUser'
import Send from './components/Messages/Send'
import Message from './components/Messages/Message'

const App = () => {
  const authUser = useSelector(state => state.auth.authUser);
  const searchUser = useSelector(state => state.user.user);
  const navVal = useSelector(state => state.nav.navVal);

  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={authUser ? <Navigate to='/home' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/home' /> : <SignUp />} />

        <Route path='/home' element={authUser ? <Home /> : <Navigate to='/login' />} />
        <Route path='/search' element={authUser ? <SearchUser /> : <Navigate to='/login' />} />
        <Route path='/user/:username' element={authUser ? <User /> : <Navigate to='/login' />} />
        <Route path='/send' element={authUser ? <Send /> : <Navigate to='/login' />} />
        <Route path='/send/:username' element={authUser ? <Message /> : <Navigate to='/login' />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
