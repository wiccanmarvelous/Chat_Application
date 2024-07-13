import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectMongoDB from './db/connectMongoDB.js';
import authRoutes from './routes/authUser.routes.js';
import usersRoutes from './routes/users.routes.js';
import messageRoutes from './routes/message.routes.js';
import { app, server } from './socket/socket.js';
import path from 'path';

dotenv.config();

// const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
// app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);
app.use('/api/message', messageRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

server.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server running on port ${PORT}.`);
})