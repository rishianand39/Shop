import express from "express";
const router = express.Router();

import { WishlistModel } from "../models/wishlist.model.js";

// get all wishlist items
router.get("/:userId", async (req, res) => {
  try {
    let items = await WishlistModel.find({userId: req.params.userId});

    return res.status(200).json(items);
  } catch (error) {
    return res.status(400).json(error);
  }
});

// create a new Wishlist item
router.post("/create", async (req, res) => {
  try {
    let item = await WishlistModel.create(req.body);

    return res.status(200).json(`Item is added to Wishlist`);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// delete a Wishlist item
router.delete("/:id", async (req, res) => {
  try {
    let item = await WishlistModel.findByIdAndDelete(req.params.id);
    return res.status(200).json("Item is deleted successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
});


// delete all Wishlist items
router.delete("/all", async (req, res) => {
  try {
    let items = await WishlistModel.remove();

    return res.status(200).json("Wishlist is empty now");
  } catch (error) {
    return res.status(500).json(error.message);
  }
});


export default router;
