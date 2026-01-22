import express from "express";
import { foodPartnerController } from "../controllers/foodPartner.controller.js";

const router = express.Router();

//food partner API
router.post("/food-partner/register", foodPartnerController.registerFoodPartner);
router.post("/food-partner/login", foodPartnerController.loginFoodPartner);
router.get("/food-partner/logout", foodPartnerController.logoutFoodPartner);

export default router;
