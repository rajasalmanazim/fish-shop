const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  type: String,
  image: String   // NEW FIELD
});

module.exports = mongoose.model("Product", ProductSchema);