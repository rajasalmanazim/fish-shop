import React, { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_API_URL;

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/customers`)
      .then(res => setCustomers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>
      <ul>
        {customers.map(c => (
          <li key={c._id}>
            {c.name} - {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;