// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Import routes
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const customerRoutes = require("./routes/customers");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Fish Shop API Running");
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));