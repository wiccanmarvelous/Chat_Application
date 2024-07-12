import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EditProgile = () => {

    const navigate = useNavigate();
    const authUser = useSelector(state => state.auth.authUser);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = () => {
        navigate(`/user/${authUser.username}`);
    }


    return (
        <>
            <div className="main">
                <div className="picture">
                    <img src="" alt="" />
                    <h3>Set picture</h3>
                </div>
                <div className="name">
                    <h3><label htmlFor="name">Name</label></h3>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="username">
                    <h3><label htmlFor="username">Name</label></h3>
                    <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="bio">
                    <h3><label htmlFor="bio">Bio</label></h3>
                    <input type="text" id="bio" value={bio} onChange={e => setBio(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Done</button>
            </div>
        </>
    )
}

export default EditProgile
