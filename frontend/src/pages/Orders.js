import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const BACKEND_URL = process.env.REACT_APP_API_URL;

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/orders`)
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Navigation />
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Orders</h1>
      <div style={{ maxWidth: "900px", margin: "auto", padding: "30px" }}>
        {orders.length === 0 && <p>No orders placed yet.</p>}
        {orders.map(order => (
          <div key={order._id} style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
            background: "#f9f9f9"
          }}>
            <h3>Order ID: {order._id}</h3>
            <p><strong>Customer:</strong> {order.customerName || "Guest"}</p>
            <p><strong>Date:</strong> {new Date(order.date || order.createdAt).toLocaleString()}</p>
            <p><strong>Total:</strong> Rs {order.totalPrice || order.total}</p>
            <ul>
              {order.items.map((item, i) => (
                <li key={i}>{item.name} x {item.quantity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Orders;