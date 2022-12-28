import express from "express";
const router=express.Router();
import Razorpay from "razorpay"
import dotenv from "dotenv";
dotenv.config();


router.post("/", async(req,res)=>{
    try {
        var instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_SECRET_KEY,
          });

          var options = {
            amount: req.body.amount,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11"
          };
          instance.orders.create(options, function(err, order) { 
            if(err){
                return res.status(500).json(err)
            }
              return res.status(200).json(order)
          });

    } catch (error) {
        return res.status(500).json(error.message)
    }
})


export default router;