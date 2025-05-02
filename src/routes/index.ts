import { Request, Response, Express } from "express";
import { v1Apis } from "./v1Apis";

const routes = (app: Express) => {
  app.get("/health", (req: Request, res: Response) => {
    res.send("✅ Server is healthy! 🚀 It's running smoothly.");
  });
  app.get("/", (req: Request, res: Response) => {
    res.send("✅ Server is running! 🚀 Welcome to the API.");
  });
  v1Apis(app);
};

export default routes;
