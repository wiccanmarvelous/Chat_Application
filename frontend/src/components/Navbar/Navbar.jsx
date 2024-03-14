import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><HomeIcon style={{color: 'white'}} /></li>
            <li><SearchIcon style={{color: 'white'}} /></li>
            <li><ExploreIcon style={{color: 'white'}} /></li>
            <li><SendIcon style={{color: 'white'}} /></li>
            <li><FavoriteBorderIcon style={{color: 'white'}} /></li>
            <li><AddBoxIcon style={{color: 'white'}} /></li>
        </ul>
    </div>
  )
}

export default Navbar