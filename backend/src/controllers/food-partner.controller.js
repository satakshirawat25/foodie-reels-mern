import { foodPartnerModel } from "../models/foodPartner.models.js";

export const getFoodPartnerById = async(req,res)=>{
    const foodPartnerId = req.params.id;

    const foodPartner = await foodPartnerModel.findById(foodPartnerId)

    if(!foodPartner){
        return res.status(404).json({message:"Food partner not found"})
    }
    res.status(200).json({
        message:"Food partner retrieved successfully",
        foodPartner
    })
}
export const foodPartnerController = {
    getFoodPartnerById
}