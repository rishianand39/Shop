import express from "express";
const router = express.Router();

import { CartModel } from "../models/cart.model.js";

// get all cart items
router.get("/", async (req, res) => {
  try {
    let items = await CartModel.find();

    return res.status(200).json(items);
  } catch (error) {
    return res.status(400).json(error);
  }
});

// create a new Cart
router.post("/create", async (req, res) => {
  try {
    let item = await CartModel.create(req.body);

    return res.status(200).json(`Item is added to cart`);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// delete a Cart
router.delete("/:id", async (req, res) => {
  try {
    let item = await CartModel.findByIdAndDelete(req.params.id);
    return res.status(200).json("Item is deleted successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
});


// delete all cart items
router.delete("/all", async (req, res) => {
  try {
    let items = await CartModel.remove();

    return res.status(200).json("Cart is empty now");
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// update a item
router.patch("/:id", async (req, res) => {
  try {
    console.log(req.body);
    let item = await CartModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(item);
    // return res.status(200).json(`Item is updated successfully ${item}`)
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

export default router;
