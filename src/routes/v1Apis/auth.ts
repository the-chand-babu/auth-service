import express from "express";
import { Login, Register } from "../../controllers/authConroller";

const authRoutes = express.Router();

authRoutes.get("/login", Login);
authRoutes.get("/register", Register);

export default authRoutes;
