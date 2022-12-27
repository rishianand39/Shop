import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();
import { ProductModel } from "../models/product.model.js";

// get all products
router.get("/", async (req, res) => {
  try {
    let products;
    let queryObj = req.query;
    let limit=req.query.limit || 15;

    let excudedFields = ["page", "sort", "limit"];
    excudedFields.forEach((el) => delete queryObj[el]);

    //  ADVANCE FILTER
    // {category: { 'in': [ 'women', 'men' ] },price: { 'gte': '32134' }, brand: 'puma'}
    // {category: { '$in': [ 'women', 'men' ] },price: { '$gte': '32134' }, brand: 'puma'}
    let queryStr = JSON.stringify(queryObj);
    queryStr = JSON.parse(
      queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)
    );

    products=await ProductModel.find(queryStr).limit(limit);


    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

// get single product
router.get("/:id", async (req, res) => {
  try {
    let product = await ProductModel.findById(req.params.id);
    return res.status(200).json(product)
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

// create a new product
router.post("/create-one", async (req, res) => {
  try {

    let product = await ProductModel.create(req.body)
    return res.status(200).json(` product created successfully with id: ${product._id}`)
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

// create multiple new products
router.post("/create-many", async (req, res) => {
  
  try {
    let products= await ProductModel.insertMany(req.body);

    return res.status(200).json(`${products.length} products have been created successfully`)
  } catch (error) {
    return res.status(400).json(error.message);
  }
});


// delete single product
router.delete("/:id", async (req, res) => {
  try {
    let product = await ProductModel.findByIdAndDelete(req.params.id)

    return res.status(200).json(`product with id ${req.params.id} got deleted successfully`)
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

// update sigle product
router.patch("/:id", async (req, res) => {
  try {
    let product= await ProductModel.findByIdAndUpdate(req.params.id, req.body);

    return res.status(200).json(`Product with ${req.params.id} got updated successfully`)
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

export default router;
