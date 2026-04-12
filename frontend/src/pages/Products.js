import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const BACKEND_URL = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get(`${BACKEND_URL}/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleQuantityChange = (productId, value) => {
    setQuantities({
      ...quantities,
      [productId]: value
    });
  };

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const quantity = parseInt(quantities[product._id] || 1);
    const existing = cart.find(p => p._id === product._id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} (x${quantity}) added to cart`);
  };

  return (
    <div>
      <Navigation />
      <h1 style={{ textAlign: "center" }}>Fish Collection</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px",
        padding: "40px"
      }}>
        {products.map(p => (
          <div key={p._id} style={{
            border: "1px solid #ddd",
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <img src={p.image} width="200" style={{ marginBottom: "15px" }} />
            <h3>{p.name}</h3>
            <p>Price: Rs {p.price}</p>
            <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="number"
                min="1"
                value={quantities[p._id] || 1}
                onChange={(e) => handleQuantityChange(p._id, e.target.value)}
                style={{ width: "60px", textAlign: "center" }}
              />
              <button
                onClick={() => addToCart(p)}
                style={{
                  padding: "8px 15px",
                  background: "#0ea5e9",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Products;