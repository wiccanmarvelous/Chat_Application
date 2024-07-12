import express from 'express';
import { sendMessage, getMessages, getConversations } from '../controllers/message.controller.js';
import protectRoutes from '../middleware/protectRoutes.js';

const router = express.Router();

router.post('/sendMessage/:username', protectRoutes, sendMessage);

router.get('/getMessages/:username', protectRoutes, getMessages);

router.get('/getConversations', protectRoutes, getConversations);

export default router;