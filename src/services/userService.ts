import { UserModal } from "@models";
import { IUser } from "@types";

class userServices {
  async getUserById(id: string) {
    console.log("getUserById", id);
  }
  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      const user = await UserModal.findOne({ email: email });
      if (!user) {
        return null;
      }
      return user;
    } catch (err) {
      console.error(`Error fetching user with email ${email}:`, err);
      // You can either throw a new error or return a custom error message
      throw new Error("Failed to fetch user. Please try again later.");
    }
  }
  async createUser(user: any): Promise<IUser | null> {
    try {
      const createdUser = new UserModal(user);
      await createdUser.save();
      return createdUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Failed to create user. Please try again later.");
    }
  }
  async updateUser(id: string, user: any) {
    console.log("updateUser", id, user);
  }
  async deleteUser(id: string) {
    console.log("deleteUser", id);
  }
  async getAllUsers() {
    console.log("getAllUsers");
  }
  async getUserByName(name: string) {
    console.log("getUserByName", name);
  }
  async getUserByRole(role: string) {
    console.log("getUserByRole", role);
  }
  async getUserByCreatedAt(createdAt: Date) {
    console.log("getUserByCreatedAt", createdAt);
  }
  async getUserByUpdatedAt(updatedAt: Date) {
    console.log("getUserByUpdatedAt", updatedAt);
  }
  async getUserByIdAndUpdate(id: string, user: any) {
    console.log("getUserByIdAndUpdate", id, user);
  }
  async getUserByIdAndDelete(id: string) {
    console.log("getUserByIdAndDelete", id);
  }
  async getUserByIdAndRole(id: string, role: string) {
    console.log("getUserByIdAndRole", id, role);
  }
  async getUserByIdAndCreatedAt(id: string, createdAt: Date) {
    console.log("getUserByIdAndCreatedAt", id, createdAt);
  }
  async getUserByIdAndUpdatedAt(id: string, updatedAt: Date) {
    console.log("getUserByIdAndUpdatedAt", id, updatedAt);
  }
  async getUserByIdAndPassword(id: string, password: string) {
    console.log("getUserByIdAndPassword", id, password);
  }
}

export default userServices;
