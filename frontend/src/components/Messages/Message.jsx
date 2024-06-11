import React, { useState } from 'react'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

const mess = [
  { value: 'left', message: 'hi how are you' },
  { value: 'right', message: 'hi i am fine how do you do' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi how are you' },
  { value: 'right', message: 'hi i am fine how do you do' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi how are you' },
  { value: 'right', message: 'hi i am fine how do you do' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi how are you' },
  { value: 'right', message: 'hi i am fine how do you do' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi how are you' },
  { value: 'right', message: 'hi i am fine how do you do' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi how are you' },
  { value: 'right', message: 'hi i am fine how do you do' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi how are you' },
  { value: 'right', message: 'hi i am fine how do you do' },
  { value: 'right', message: 'hi' },
  { value: 'left', message: 'hi' },
  { value: 'right', message: 'hi' },
  { value: 'right', message: 'hi' },
]

const Message = () => {

  const [messageInput, setMessageInput] = useState('');

  return (
    <div className='message'>
      <header>
        <div className="left">
          <button><KeyboardBackspaceIcon style={{ color: 'white' }} /></button>
          <div className="bio">
            <img src={`https://avatar.iran.liara.run/public`} alt="" />
            <div className="name">
              <h5>Name</h5>
              <h6>Username</h6>
            </div>
          </div>
          <div className="right">
          </div>
        </div>
      </header>
      <main>
        {
          mess.map((i => (
            <div className='pos'>
              <span className={`${i.value}`}>
                {i.message}
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
          <button className="send-btn">{messageInput.trim().length === 0 ? '' : <SendIcon style={{color: 'gray'}} />}</button>
        </div>
      </footer>
    </div>
  )
}

export default Message
