import express from 'express';
import { getAllUsers, searchUser } from '../controllers/users.controller.js';
import protetRoutes from '../middleware/protectRoutes.js';

const router = new express.Router();

router.get('/searchUser/:username', protetRoutes, searchUser);
router.get('/getAllUsers', protetRoutes, getAllUsers);

export default router;