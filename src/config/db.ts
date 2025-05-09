import mongoose from "mongoose";

const connection = async (): Promise<void> => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    const connect = await mongoose.connect(uri, {
      // Optional: Additional recommended options
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions); // Ensure proper type

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connection;
