import { IUser } from "@types";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  profile: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
});

userSchema.index({ email: 1, role: 1 });
userSchema.index({ name: 1, role: 1 });
userSchema.index({ profile: 1, phone: 1 });

const UserModal = mongoose.model("User", userSchema);
export default UserModal;
