import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();

app.use(cors())
app.use(cookieParser());
app.use(express.json());

// controllers
import auth from "./controllers/user.controller.js";
import product from "./controllers/product.controller.js";

// home route
app.get("/",(req,res)=>{
    return res.status(200).json("Welcome to shop api")
})

// authentication route
app.use("/api/auth", auth)

// products route
app.use("/api", product)


export default app;