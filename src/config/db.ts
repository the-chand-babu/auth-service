import mongoose from "mongoose";

const connection = async () => {
  try {
    if (!process.env.mongodb_uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    const connect = await mongoose.connect(process.env.mongodb_uri);
    console.log("MongoDB connected successfully", connect.connection.host);
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

export default connection;
