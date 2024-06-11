import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserBox = ({ route, username, getSerchedUser }) => {

    const navigate = useNavigate();

    return (
        <div className='userbox'>
            <ul>
                {username.trim() !== "" && getSerchedUser.map(user => (
                    <Link key={user.id || Math.random()} style={{ textDecoration: 'none', color: 'inherit' }} to={`/${route}/${user.username}`}>
                        <li onClick={() => navigate(user.username)}>
                            <div className="img">
                                <img src={user.profilePic} alt="" />
                            </div>
                            <div className='details'>
                                <h4>{user.name}</h4>
                                <h5>@{user.username}</h5>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default UserBox
