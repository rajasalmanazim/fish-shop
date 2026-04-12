import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Use environment variable
const BACKEND_URL = process.env.REACT_APP_API_URL;

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decreaseQty = (id) => {
    const updated = cart.map(item =>
      item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item._id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const checkout = async () => {
    try {
      const customerName = prompt("Enter your name for this order:");
      if (!customerName) return alert("Order cancelled. Name is required.");

      await axios.post(`${BACKEND_URL}/orders`, {
        items: cart,
        totalPrice: total,
        customerName
      });

      for (let item of cart) {
        try {
          await axios.patch(`${BACKEND_URL}/products/${item._id}`, {
            quantity: item.quantity * -1
          });
        } catch (err) {
          console.log(`Failed to update stock for ${item.name}:`, err.message);
        }
      }

      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      setCart([]);

    } catch (err) {
      console.log(err.response ? err.response.data : err.message);
      alert("Something went wrong while placing the order.");
    }
  };

  return (
    <div>
      <Navigation />
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Shopping Cart</h1>
      <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.map(item => (
          <div key={item._id} style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
            gap: "20px",
            background: "#f9f9f9"
          }}>
            <img src={item.image} width="80" height="80" style={{ objectFit: "cover", borderRadius: "6px" }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 5px 0" }}>{item.name}</h3>
              <p style={{ margin: 0 }}>Price: Rs {item.price}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={() => decreaseQty(item._id)} style={btnStyle}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item._id)} style={btnStyle}>+</button>
            </div>
            <button onClick={() => removeItem(item._id)} style={{ ...btnStyle, background: "#ef4444" }}>
              Remove
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <h2>Total: Rs {total}</h2>
            <button onClick={checkout} style={{
              padding: "12px 25px",
              fontSize: "16px",
              background: "#0ea5e9",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              Checkout
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

const btnStyle = {
  padding: "6px 12px",
  background: "#0ea5e9",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default Cart;