const express = require("express");
const router = express.Router();
const Product = require("../models/Products");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new product
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH product quantity (for checkout)
router.patch("/:id", async (req, res) => {
  const { quantity } = req.body; // can be negative
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.quantity += quantity; // decrease stock if negative
    if (product.quantity < 0) product.quantity = 0; // prevent negative stock
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;