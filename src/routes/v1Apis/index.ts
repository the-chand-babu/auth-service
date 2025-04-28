import { Express } from "express";
import authRoutes from "./auth";

export const v1Apis = (app: Express) => {
  app.use("/api/v1/auth", authRoutes);
};
