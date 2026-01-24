import { foodModel } from "../models/food.models.js";
import { storageService } from "../services/storage.service.js";
import { v4 as uuid } from "uuid";

  


export const createFood = async (req, res) => {

    console.log(req.file);
    console.log(req.body)
    
     const ext = req.file.originalname.split(".").pop();


  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    // uuid()
    `${uuid()}.${ext}`
  );

  const foodItem = await foodModel.create({
    name:req.body.name,
    description:req.body.description,
    video:fileUploadResult.url,
    foodPartner:req.foodPartner._id,
  })

 
res.status(201).json({
  messsage:"food created successfully",
  food:foodItem
});

  
};

export const getFoodItems = async(req,res)=>{
const foodItems = await foodModel.find({})
res.status(200).json({
  message:"Food Items fetched successfully",
  foodItems
})
}
export const foodController = {
  createFood,
  getFoodItems
};
