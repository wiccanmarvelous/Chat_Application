import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import SearchUser from '../../components/Messages/Users/SearchUser';

const Home = () => {
  return (
    <div className='home'>
      <Navbar  />
      <SearchUser />
    </div>
  )
}

export default Home
