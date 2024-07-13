import React, { useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import User from './components/Users/User'
import SearchUser from './components/Users/SearchUser'
import Send from './components/Messages/Send'
import Message from './components/Messages/Message'
import EditProgile from './components/Users/EditProgile'
import { io } from 'socket.io-client';
import socket, { socketActions } from './store/socket';

const App = () => {
  const authUser = useSelector(state => state.auth.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const socket = io("https://chat-application-89gu.onrender.com", {
        query: {
          userId: authUser.id
        }
      })
      dispatch(socketActions.setSocketId(socket.id));
      return () => socket.close();
    } else {
      if (socket == undefined || socket == null) {
        socket.close();
        dispatch(socketActions.setSocketId(null));
      }
    }
  }, [authUser]);


  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={authUser ? <Navigate to={`/user/${authUser.username}`} /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to={`/user/${authUser.username}`} /> : <SignUp />} />

        <Route path='/home' element={authUser ? <Home /> : <Navigate to='/login' />} />
        <Route path='/search' element={authUser ? <SearchUser /> : <Navigate to='/login' />} />
        <Route path='/user/edit' element={authUser ? <EditProgile /> : <Navigate to='/login' />} />
        <Route path='/user/:username' element={authUser ? <User /> : <Navigate to='/login' />} />
        <Route path='/' element={authUser ? <Navigate to={`/user/${authUser.username}`} /> : <Navigate to='/login' />} />
        <Route path='/send' element={authUser ? <Send /> : <Navigate to='/login' />} />
        <Route path='/send/:username' element={authUser ? <Message /> : <Navigate to='/login' />} />
        <Route path='*' element={authUser ? <Home /> : <Navigate to='/login' />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
