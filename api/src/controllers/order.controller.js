import express from "express";
const router=express.Router();
import {OrderModel} from "../models/order.model.js";

// get all orders by userId
router.get("/:userId", async(req, res)=>{
    try {
        let orders=await OrderModel.find({userId:req.params.userId});

        return res.status(200).json(orders)
    } catch (error) {
        return res.status(500).json(error.message);
    }
})

// create order
router.post("/", async(req, res)=>{
    try {
        let order=await OrderModel.create(req.body);
        
        return res.status(200).json(order)
    } catch (error) {
        return res.status(500).json(error.message);
    }
})

// delete order
router.delete("/:orderId", async(req, res)=>{
    try {
        let orders=await OrderModel.findByIdAndDelete(req.params.orderId);
        
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json(error.message);
    }
})


export default router;