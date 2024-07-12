import { useState, useEffect } from "react"
import toast from 'react-hot-toast'
import { useSelector } from "react-redux";

const useGetConversations = () => {

    const authUser = useSelector(state => state.auth.authUser);
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    const getConversations = async () => {
        setLoading(true);
        try {

            const res = await fetch(`/api/message/getConversations`);

            const data = await res.json();

            if (data.error)
                throw new Error(data.error)

            const list = data.map(convo =>
                convo.participants[0]._id === authUser.id ? convo.participants[1] : convo.participants[0]
            );

            setConversations(list);
            console.log(list);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }   

    return { getConversations, conversations, loading };
}

export default useGetConversations

