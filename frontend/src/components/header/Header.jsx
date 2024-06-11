import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routesActions } from '../../store/routeshistory';

const Header = () => {

    const lastRoute = useSelector(state => state.routes.lastRoute);
    const navigate = useNavigate();

    const handleRoute = () => {
    }

    return (
        <div className='header'>
            <button onClick={handleRoute}><ArrowBackOutlinedIcon style={{ color: 'white' }} /></button>
        </div>
    )
}

export default Header
