import express from "express";
import { foodController } from "../controllers/food.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import multer from "multer";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

// /post/api/food/protected
router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood
);

//get
router.get("/",
   authMiddleware.authUserMiddleware,
  foodController.getFoodItems);

export default router;
