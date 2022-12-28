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
import cart from "./controllers/cart.controller.js";
import order from "./controllers/order.controller.js";
import payment from "./controllers/payment.controller.js";
// home route
app.get("/",(req,res)=>{
    return res.status(200).json("Welcome to shop api")
})

// products 
app.use("/api/product", product)

// authentication 
app.use("/api/auth", auth)

// cart 
app.use("/api/cart", cart)

// order
app.use("/api/order", order)

// payment
app.use("/api/pay", payment)


export default app;