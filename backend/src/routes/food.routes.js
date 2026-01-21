import express from 'express'
import {foodController} from '../controllers/food.controller.js'
import { authFoodPartnerMiddleware } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/',authFoodPartnerMiddleware,foodController.createFood)



export default router