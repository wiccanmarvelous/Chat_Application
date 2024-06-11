import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SearcBox from '../../utils/SearcBox'

const Send = () => {

    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    return (
        <>
            <div className="main">
                <div className="send">
                    <SearcBox handleChange={handleChange} username={username} />
                    
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Send
