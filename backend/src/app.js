// import express from "express";
// import cookieParser from "cookie-parser";
// import authRoutes from "./routes/auth.routes.js";
// import foodPartnerRoutes from "./routes/foodPartner.routes.js";
// import foodRoutes from "./routes/food.routes.js";

// const app = express();
// app.use(cookieParser());
// app.use(express.json());

// //route
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/foodPartner", foodPartnerRoutes);
// app.use("/api/food", foodRoutes);

// export default app;

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import foodPartnerRoutes from "./routes/foodPartner.routes.js";
import foodRoutes from "./routes/food.routes.js";

const app = express();
app.use(cookieParser());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/auth", authRoutes);
app.use("/api/foodPartner", foodPartnerRoutes);
app.use("/api/food", foodRoutes);

export default app;

