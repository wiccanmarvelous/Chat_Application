import { createContext, useContext, useEffect, useState } from "react";
import io from 'socket.io-client'
import { useSelector } from "react-redux";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    const authUser = useSelector(state => state.auth.authUser);

    useEffect(() => {
        if (authUser) {
            const socket = io('https://localhost4000', {
                query: {
                    userId: authUser.id
                }
            });
            setSocket(socket);

            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}