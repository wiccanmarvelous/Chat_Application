import React, { useState } from 'react'
import useSearchUser from '../../hooks/useSearchUser';
import User from './User';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user';
import { Link, useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../Navbar/Navbar';
import SearcBox from '../../utils/SearcBox';
import UserBox from '../../utils/UserBox';

const SearchUser = () => {
    const [username, setUsername] = useState("")
    const { loading, searchUser, getSerchedUser } = useSearchUser();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await searchUser(username);
    }
    const handleChange = async (e) => {
        setUsername(e.target.value);
        await searchUser(username);
    }
    const selectedUser = (user) => {
        dispatch(userActions.setUser(user));
    }

    const styleLabel = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }

    return (
        <>
            <div className="main">
                <div className='searchUser'>
                    <SearcBox handleChange={handleChange} username={username} />
                    {loading ? (
                        <h2 style={styleLabel}>Loading...</h2>
                    ) : (
                        <UserBox route='user' username={username} getSerchedUser={getSerchedUser} />
                    )}
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default SearchUser;
