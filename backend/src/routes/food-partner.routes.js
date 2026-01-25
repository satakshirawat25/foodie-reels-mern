import express from "express";
import { foodPartnerController } from "../controllers/food-partner.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/:id",
  authMiddleware.authUserMiddleware,
  foodPartnerController.getFoodPartnerById
);

export default router;
