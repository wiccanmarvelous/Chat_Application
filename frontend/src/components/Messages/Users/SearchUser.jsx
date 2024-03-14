import React, { useState } from 'react'
import useSearchUser from '../../../hooks/useSearchUser';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const SearchUser = () => {
    const [username, setUsername] = useState("")
    const { loading, searchUser, getSerchedUser } = useSearchUser();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await searchUser(username);
    }
    const handleChange = async (e) => {
        setUsername(e.target.value);
        await searchUser(username);
    }
    return (
        <div className='searchUser'>
            <div className="searchBox">
                <PersonSearchIcon style={{ color: 'white' }} />
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        id="inp"
                        onChange={handleChange}
                        value={username}
                    />
                    <button className='btn' type="submit">Search</button>
                </form>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="serchedUsers">
                    <ul>
                        {getSerchedUser.map(user => (
                            <li><img src={user.profilePic} alt="" />  {user.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SearchUser;
