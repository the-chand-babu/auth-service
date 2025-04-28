import { Request, Response } from "express";

const Login = (req: Request, res: Response) => {
  res.send("Login route");
};

const Register = (req: Request, res: Response) => {
  res.send("Register route");
};

export { Login, Register };
