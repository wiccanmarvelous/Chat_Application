import { useState } from "react";
import toast from "react-hot-toast";

const useSearchUser = () => {
    const [loading, setLoading] = useState(false);
    const [getSerchedUser, setGetSerchedUser] = useState([]);
    const searchUser = async (username) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/user/searchUser/${username}`);
            const data = await res.json();
            
            if (data.error)
                throw new Error(data.error);
            setGetSerchedUser(data);
        } catch (error) {
            console.log(error.message);
            // toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { loading, searchUser, getSerchedUser };
}

export default useSearchUser;