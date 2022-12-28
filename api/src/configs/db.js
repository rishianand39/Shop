import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async() => {
 return await mongoose.connect(process.env.MONGO_URI);
};
export default connect;
