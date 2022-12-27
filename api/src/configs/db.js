import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = () => {
  mongoose.connect(process.env.MONGO_URI);
};
export default connect;
