import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SendIcon from '@mui/icons-material/Send';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../store/nav';
import { routesActions } from '../../store/routeshistory';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navVal = useSelector(state => state.nav.navVal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick = (val) => {
    navigate(`/${val}`);
    dispatch(navActions.setNav(val));
    dispatch(routesActions.setRoutesHistory(val));
  }

  return (
    <div className='navbar'>
      <ul>
        <li>
          <button onClick={() => handleClick('home')}>
            {navVal === 'home' ? <HomeIcon style={{ color: 'white' }} /> : <HomeOutlinedIcon style={{ color: 'white' }} />}
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('search')}>
            {navVal === 'search' ? <SearchIcon style={{ color: 'white' }} /> : <SearchOutlinedIcon style={{ color: 'white' }} />}
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('send')}>
            {navVal === 'send' ? <SendIcon style={{ color: 'white' }} /> : <SendOutlinedIcon style={{ color: 'white' }} />}
          </button>
        </li>
        <li>
          <button onClick={() => handleClick(`user/sxmcbaka`)}>
            {navVal === 'account' ? <AccountCircleIcon style={{ color: 'white' }} /> : <AccountCircleOutlinedIcon style={{ color: 'white' }} />}
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar