import express  from 'express';
import {verifyToken} from '../utils/verifyUser.js'
import {uploadImage,getUserImages} from '../controllers/image.controller.js'
const router = express.Router();
router.post('/upload', verifyToken, uploadImage)
router.get('/get', verifyToken, getUserImages)   

export default router;