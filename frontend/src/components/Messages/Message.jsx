import React, { useEffect, useRef, useState } from 'react'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SendIcon from '@mui/icons-material/Send';
import useSendMessage from '../../hooks/useSendMessage';
import useGetMessages from '../../hooks/useGetMessages';
import useSearchOneUser from '../../hooks/useSearchOneUser';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useListenMessage from '../../hooks/useListenMessage';
import useConversation from '../../store/useConversation';

const Message = () => {

  const params = useParams();
  const navigate = useNavigate();
  const authUser = useSelector(state => state.auth.authUser);
  const { sendMessage, loading: sendLoading } = useSendMessage();
  const { getMessages, messages, loading: getLoading } = useGetMessages();
  const { loading, searchUser, getSerchedUser } = useSearchOneUser();
	const lastMessageRef = useRef();

  const { setMessages } = useConversation();
  const socket = useSelector(state => state.socket.socketId);

  const [messageInput, setMessageInput] = useState('');
  const [sent, setSent] = useState(false);
  // const [messageList, setMessageList] = useState(messages);
  useListenMessage();

  useEffect(() => {
    getMessages(params.username);
    searchUser(params.username);
    socket?.on("newMessage", (messageInput) => {
      messageInput.sholdShake = true;
      setMessages([messageInput, ...messages]);
      console.log("socket", messageInput);
  })
  }, [messageInput, messages, sent]);

  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  const sendInputMessage = () => {
    // setMessageList(old => ([ messageInput , ...old]));
    setMessageInput('');
    sendMessage(params.username, messageInput);
    setSent(old => !old);
  }

  return (
    <div className='message'>
      <header onClick={() => navigate(`/user/${getSerchedUser.username}`)}>
        <div className="left">
          <div className="bio">
            <img src={getSerchedUser.profilePic} alt="" />
            <div className="name">
              <h3>{getSerchedUser.name}</h3>
              <h5>{getSerchedUser.username}</h5>
            </div>
          </div>
          <div className="right">
          </div>
        </div>
      </header>
      <main>
        {
          messages.map((i => (
            <div key={Math.random()} className='pos'>
              <span className={`${i.senderId === authUser.id ? "right" : "left"}`}>
                <h3>{i.message}</h3>
                <h5 style={{color: "black", marginTop: ".2rem", float: "right"}}>{i.time}</h5>
              </span>
            </div>
          )))
        }
      </main>
      <footer>
        <div className="send">
          <input
            type="text"
            placeholder='Message'
            value={messageInput}
            onChange={e => setMessageInput(e.target.value)}
          />
          <button
            className="send-btn"
            onClick={sendInputMessage}
            onKeyDown={e => e.key === 'Enter' ? sendInputMessage : ''}
          >
            {messageInput.trim().length === 0 ? '' : <SendIcon style={{ color: 'gray' }} />}
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Message
