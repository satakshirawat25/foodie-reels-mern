import { userModel } from "../models/user.model.js";
import {foodPartnerModel} from '../models/foodPartner.models.js'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  //create new user
  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });

  //create token
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  //create token
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "Login successful",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "User logged out successfully",
  });
};


export const registerFoodPartner = async (req, res) => {
  const { name, email, password,phone,address,contactName } = req.body;

  const isAccountAlreadyExists = await foodPartnerModel.findOne({ email });

  if (isAccountAlreadyExists) {
    return res.status(400).json({
      message: "Food Partner account already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    name,
    email,
    password: hashedPassword,
    phone,
    address,
    contactName,
  });
  //create token
  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "FoodPartner registered successfully",
    foodPartner: {
      _id: foodPartner._id,
      email: foodPartner.email,
      name: foodPartner.name,
      address: foodPartner.address,
      contactName: foodPartner.contactName,
      phone: foodPartner.phone,
    },
  });
};

export const loginFoodPartner = async (req, res) => {
  const { email, password } = req.body;

  const foodPartner = await foodPartnerModel.findOne({ email });

  if (!foodPartner) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  //create token
  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "Login successful",
    foodPartner: {
      _id: foodPartner._id,
      email: foodPartner.email,
      name: foodPartner.name,
    },
  });
};

export const logoutFoodPartner = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "FoodPartner logged out successfully",
  });
};



export const authController = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner
};
