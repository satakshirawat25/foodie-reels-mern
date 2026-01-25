import { foodPartnerModel } from "../models/foodPartner.models.js";
import { foodModel } from "../models/food.models.js";

export const getFoodPartnerById = async (req, res) => {

  
  const foodPartnerId = req.params.id;

  const foodPartner = await foodPartnerModel.findById(foodPartnerId);



  //  console.log("DATA:", foodPartner);


   const foodItemsByFoodPartner = await foodModel.find({ foodPartner: foodPartnerId })

  if (!foodPartner) {
    return res.status(404).json({ message: "Food partner not found" });
  }
  res.status(200).json({
    message: "Food partner retrieved successfully",
    foodPartner:{
      ...foodPartner.toObject(),
      foodItems:foodItemsByFoodPartner
    }
  });
};
export const foodPartnerController = {
  getFoodPartnerById,
};
