import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    mongoose.connect(process.env.mongoURL);
    console.log("db connected ....");
  } catch (error) {
    console.log(error);
    process.exit(1)
    
  
  }
};

export default connectDb;
