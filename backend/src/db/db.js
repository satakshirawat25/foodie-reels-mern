// connect database
import mongoose from "mongoose";
import dotenv  from "dotenv";
dotenv.config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb connected")
    }catch(error){
        console.log("mongodb connection failed")
    }
}
export default connectDB



