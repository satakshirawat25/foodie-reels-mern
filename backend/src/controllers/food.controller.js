import { foodModel } from "../models/food.models.js";

export const createFood = async(req,res)=>{

    res.send("food item created")
}

export const foodController = {
    createFood
}