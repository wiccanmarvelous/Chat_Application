import express from 'express';
import { getAllUsers, searchOneUser, searchUser, getCurrentUser } from '../controllers/users.controller.js';
import protectRoutes from '../middleware/protectRoutes.js';

const router = new express.Router();

router.get('/searchUser/:username', searchUser);
router.get('/searchOneUser/:username', searchOneUser);
router.get('/getAllUsers', protectRoutes, getAllUsers);
router.get('/getCurrentUser', protectRoutes, getCurrentUser);

export default router;