// models/Order.js
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true }
    }
  ],
  totalPrice: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);