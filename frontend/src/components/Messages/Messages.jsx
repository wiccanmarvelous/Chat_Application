import React, { useEffect } from 'react'
import useGetConversations from '../../hooks/useGetConversations'
import { Link, useNavigate } from 'react-router-dom';
import useConversation from '../../store/useConversation';

const Messages = () => {

  const navigate = useNavigate();
  const { getConversations, conversations, loading } = useGetConversations();
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    getConversations();
  }, [])

  const styleLabel = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }


  return (
    <div className='users'>
      {loading && <h2 style={styleLabel}>Loading chats...</h2>}
      {!loading && conversations.length === 0 ?
        (<h2 style={styleLabel}>No Chats</h2>)
        :
        (<ul className="userbox">
          {conversations.map(user => (
            <Link key={user.id || Math.random()} style={{ textDecoration: 'none', color: 'inherit' }} to={`/send/${user.username}`}>
              <li onClick={() => {
                setSelectedConversation(user);
                navigate(user.username);
              }}>
                <div className="img">
                  <img src={user.profilePic} alt="" />
                </div>
                <div className='details'>
                  <h4>{user.name}</h4>
                </div>
              </li>
            </Link>
          ))}
        </ul>)
      }
    </div>
  )
}

export default Messages
