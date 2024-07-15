import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../store/useConversation";
import { useEffect } from 'react';

// import { useSocketContext } from '../store/SocketContext';
import { useDispatch, useSelector } from 'react-redux'

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

    // const { socket } = useSocketContext();
    const socket = useSelector(state => state.socket.socketId);
	
	const sendMessage = async (receiver, message, changeDate) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/message/sendMessage/${receiver}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message, changeDate }),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setMessages([data, ...messages]);


		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;