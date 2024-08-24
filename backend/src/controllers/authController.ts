import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

import { User } from "../models/User";

config();

const JWT_SECRET = process.env.JWT_SECRET_KEY!;

// Register User
export const registerUser = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  // Validate input
  if (!email || !username || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // check if email or username already exists or not
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    return res.status(409).json({
      error: "Email or Username already exists",
    });
  }

  // Hash password and save user
  try {
    const hanshedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ email, username, password: hanshedPassword });
    await newUser.save();

    return res.status(201).json({
      message: "User Registered Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server Error. Please try again later.",
    });
  }
};

// Login user by email or username and password
export const loginUser = async (req: Request, res: Response) => {
  const { identifier, password } = req.body;

  // Validate input
  if (!identifier || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    // Find user by email or username
    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({
      error: "Server error. Please try again later.",
    });
  }
};
