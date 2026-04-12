import React from "react";
import { Link } from "react-router-dom";

function Navigation(){

  return(

    <nav style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"20px",
      background:"#0f172a",
      color:"white"
    }}>

      <h2>Fish Shop</h2>

      <div style={{display:"flex",gap:"20px"}}>

        <Link style={{color:"white"}} to="/">Home</Link>

        <Link style={{color:"white"}} to="/products">Products</Link>

        <Link style={{color:"white"}} to="/cart">Cart</Link>

        <Link style={{color:"white"}} to="/orders">Orders</Link>

      </div>

    </nav>

  )

}

export default Navigation