import express from "express";
const router = express.Router();
import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();
import { OrderModel } from "../models/order.model.js";

// get all orders by userId
router.get("/:userId", async (req, res) => {
  try {
    let orders = await OrderModel.find({ userId: req.params.userId });

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// create order
router.post("/", async (req, res) => {
  try {
    var instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET_KEY,
    });

    var options = {
      amount: req.body.amount * 100, 
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    instance.orders.create(options, function (err, order) {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(order);
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});


// place order
router.post("/place-order",async(req,res)=>{
    try {
        const newOrder= await OrderModel.create(req.body);
      console.log(newOrder)
        return res.status(200).json(`Your order is placed successfully with id ${newOrder._id}`);
    } catch (error) {
        return res.status(500).json(error.message);
    }
})


// delete order
router.delete("/:orderId", async (req, res) => {
  try {
    let orders = await OrderModel.findByIdAndDelete(req.params.orderId);

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

export default router;
