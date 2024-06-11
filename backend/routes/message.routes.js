import express from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';

const router = express.Router();

router.post('sendMessage/:id', sendMessage);

router.get('getMessages/:id', getMessages);

export default router;