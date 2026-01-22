import express from "express";
import { authController } from "../controllers/auth.controller.js";
import { foodPartnerController } from "../controllers/foodPartner.controller.js";

const router = express.Router();

//user API
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.get("/user/logout", authController.logoutUser);

//food partner API
router.post("/food-partner/login", foodPartnerController.loginFoodPartner);

export default router;
