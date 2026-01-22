import dotenv from "dotenv";

// 👇 dotenv FIRST
dotenv.config()

import app from "./src/app.js";
import connectDB from "./src/db/db.js";

app.listen(3000, () => {
  connectDB();
  console.log("Server running at 3000");
});
