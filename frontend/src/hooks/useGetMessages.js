import { useState, useEffect } from "react"
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { messagesActions } from '../store/messages';
import useConversation from "../store/useConversation";
import { timeActions } from "../store/time";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    // const [messages, setMessages] = useState([]);
    const { messages, setMessages, selectedConversation } = useConversation();

    const dispatch = useDispatch()

    const getMessages = async (receiver) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/message/getMessages/${receiver}`);

            const data = await res.json();

            if (data.error)
                throw new Error(data.error);

            setMessages(data);

            let now = new Date();
            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            let date = now.toLocaleDateString('en-US', options);

            date = data[data.length - 1]?.date || date;
            dispatch(timeActions.setTime(date));

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { getMessages, messages, loading };
}

export default useGetMessages
