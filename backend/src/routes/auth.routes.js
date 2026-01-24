import express from "express";
import { authController } from "../controllers/auth.controller.js";


const router = express.Router();

//user auth API
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.get("/user/logout", authController.logoutUser);


//foodPartner auth aPi
router.post("/food-partner/register",authController.registerFoodPartner)
router.post("/food-partner/login", authController.loginFoodPartner);
router.get("/food-partner/logout", authController.logoutFoodPartner);

// router.get("/food-partner/:id", foodPartnerController.getFoodPartnerById);

//food partner API
// router.post("/food-partner/login", foodPartnerController.loginFoodPartner);

export default router;
