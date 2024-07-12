import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SearcBox from '../../utils/SearcBox'
import Messages from './Messages';
import useGetConversations from '../../hooks/useGetConversations';

const Send = () => {

    const { getConversations, conversations, loading } = useGetConversations();
    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    return (
        <>
            <div className="main">
                <div className="send">
                    {/* <SearcBox handleChange={handleChange} username={username} /> */}
                    <Messages />
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Send
