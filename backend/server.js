import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectMongoDB from './db/connectMongoDB.js';
import authRoutes from './routes/authUser.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server running on port ${PORT}.`);
})