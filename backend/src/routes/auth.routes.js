import express from 'express'
import {authController} from '../controllers/auth.controller.js'


const router = express.Router()


//user API
router.post('/user/register',authController.registerUser)
router.post('/user/login',authController.loginUser)
router.get('/user/logout',authController.logoutUser)






export default router