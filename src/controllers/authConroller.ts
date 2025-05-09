import { Request, Response } from "express";
import { userServices } from "@services";

const userService = new userServices();
const Login = (req: Request, res: Response) => {
  res.send("Login route");
};

const Register = async (req: Request, res: Response) => {
  try {
    const { name, password, email, ...rest } = req.body;
    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).send({ message: "Invalid email format" });
    }

    const isUserExist = await userService.getUserByEmail(email);

    if (isUserExist) {
      return res
        .status(400)
        .send({ message: "User with this email already exists" });
    }

    const userRegistered = await userService.createUser({
      name,
      email,
      password,
      ...rest,
    });

    if (userRegistered) {
      return res
        .status(201)
        .send({ message: "User created successfully", user: userRegistered });
    }

    // Optional: handle failure in user creation
    return res.status(500).send({ message: "Failed to create user" });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

export { Login, Register };
