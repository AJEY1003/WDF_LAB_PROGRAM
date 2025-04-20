import React, { useEffect, useState } from "react";

// Persistent Map and WeakMap
const customersMap = new Map();
const customerPrivateData = new WeakMap();

const App = () => {
  const [customersList, setCustomersList] = useState([]);

  useEffect(() => {
    // Create customer objects
    const customer1 = { id: 1, name: "Ajey", age: 22 };
    const customer2 = { id: 2, name: "Ravi", age: 30 };
    const customer3 = { id: 3, name: "Neha", age: 27 };

    // Add to Map
    customersMap.set(customer1.id, customer1);
    customersMap.set(customer2.id, customer2);
    customersMap.set(customer3.id, customer3);

    // Add private data to WeakMap
    customerPrivateData.set(customer1, { loyaltyPoints: 100 });
    customerPrivateData.set(customer2, { loyaltyPoints: 200 });
    customerPrivateData.set(customer3, { loyaltyPoints: 50 });

    // Store the customers in state for display
    setCustomersList([customer1, customer2, customer3]);

    // Console log to verify WeakMap
    console.log("Customer 1 Loyalty Points:", customerPrivateData.get(customer1).loyaltyPoints);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Customer Collection: Map vs WeakMap</h1>
      <h2>📋 Customers from Map</h2>
      <ul>
        {customersList.map((customer) => (
          <li key={customer.id}>
            {customer.name} (Age: {customer.age}) - ID: {customer.id}
          </li>
        ))}
      </ul>
      <h2>🕵️‍♂️ Private Info from WeakMap (Check Console)</h2>
      <p>
        Private data like <strong>loyaltyPoints</strong> is stored in a <code>WeakMap</code> and only accessible via reference.
      </p>
    </div>
  );
};

export default App;
