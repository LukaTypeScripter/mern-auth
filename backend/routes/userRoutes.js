import express from 'express';
import { authUser } from '../controlers/userControler.js';
const router = express.Router();
import { registerUser,logoutUser,getUserProfile,updateUser } from '../controlers/userControler.js';
import {protect} from '../middleware/autMiddlewere.js'
router.post('/',registerUser)
router.post("/auth",authUser)
router.post("/logout",logoutUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUser)

export default router;