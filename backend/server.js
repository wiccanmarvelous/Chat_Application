import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectMongoDB from './db/connectMongoDB.js';
import authRoutes from './routes/authUser.routes.js';
import usersRoutes from './routes/users.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server running on port ${PORT}.`);
})