import { Document } from "mongoose";

// Define the User interface extending mongoose.Document to enable Mongoose methods
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
  profile: string | null;
  phone: string | null;
}
