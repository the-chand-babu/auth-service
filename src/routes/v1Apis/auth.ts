import express from "express";
import { Login, Register } from "@controllers/authConroller";

const authRoutes = express.Router();

authRoutes.post("/login", Login);
authRoutes.post("/register", Register);

export default authRoutes;
