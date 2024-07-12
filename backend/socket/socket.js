import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

export const app = express();
export const server = http.createServer(app);
export const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST'],
        credentials: true
    }
});
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

const userSocketMap = {} // {userId: socketId}

io.on('connection', (socket) => {
    // console.log('a user connected', socket.id);

    const userId = socket.handshake.query.userId;
    // console.log(userId);

    if (userId != "undefined")  
        userSocketMap[userId] = socket.id;

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    })
})
