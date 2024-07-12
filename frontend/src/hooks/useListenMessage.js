import { useEffect } from 'react';

// import { useSocketContext } from '../store/SocketContext';
import useConversation from '../store/useConversation';
import { useDispatch, useSelector } from 'react-redux';

const useListenMessage = () => {
    
    const { messages, setMessages } = useConversation();
    // const { socket } = useSocketContext();
    const socket = useSelector(state => state.socket.socketId);

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.sholdShake = true;
            setMessages([newMessage, ...messages]);
            console.log("socket", newMessage);
        })
        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
}

export default useListenMessage