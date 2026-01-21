import app from "./src/app.js"
import connectDB from "./src/db/db.js"
import dotenv from 'dotenv'
dotenv.config()


app.listen(3000,()=>{
    connectDB()
    console.log(`server running at 3000`)
})