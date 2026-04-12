import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            {p.name} - ${p.price} - {p.quantity} pcs
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;