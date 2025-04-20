import React, { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "",
    Balance: 0,
  });

  const [account, setAccount] = useState({
    accountno: 0,
    accountType: "",
  });

  const [mergedData, setMergedData] = useState(null);
  const [showCustomer, setShowCustomer] = useState(false);
  const [balances, setBalances] = useState([]); 
  const [totalBalance, setTotalBalance] = useState(0);

  function Update() {
    setShowCustomer(true);
  }

  function Merge() {
    const newData = { ...customer, ...account };
    setMergedData(newData);
  }

  function Total() {
    const current = parseFloat(customer.Balance);
    const updatedBalances = [...balances, current];
    const total = updatedBalances.reduce((a, b) => a + b, 0);
    setBalances(updatedBalances);
    setTotalBalance(total);
  }

  return (
    <div style={{ padding: '20px' }}>
      <label>Customer Name:</label><br />
      <input
        type="text"
        onChange={(e) =>
          setCustomer({ ...customer, name: e.target.value })
        }
      /><br /><br />

      <label>Balance:</label><br />
      <input
        type="number"
        onChange={(e) =>
          setCustomer({ ...customer, Balance: e.target.value })
        }
      /><br /><br />

      <label>Account Number:</label><br />
      <input
        type="number"
        onChange={(e) =>
          setAccount({ ...account, accountno: e.target.value })
        }
      /><br /><br />

      <label>Account Type:</label><br />
      <input
        type="text"
        onChange={(e) =>
          setAccount({ ...account, accountType: e.target.value })
        }
      /><br /><br />

      <button onClick={Update}>Update Customer</button>
      <button onClick={Merge}>Merge Accounts</button>
      <button onClick={Total}>Total Balance</button>

      <hr />

      {showCustomer && (
        <div>
          <h2>Customer Info</h2>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Balance:</strong> ₹{customer.Balance}</p>
        </div>
      )}

      {mergedData && (
        <div>
          <h2>Merged Data</h2>
          <p><strong>Name:</strong> {mergedData.name}</p>
          <p><strong>Balance:</strong> ₹{mergedData.Balance}</p>
          <p><strong>Account No:</strong> {mergedData.accountno}</p>
          <p><strong>Account Type:</strong> {mergedData.accountType}</p>
        </div>
      )}

      {totalBalance !== null && (
        <div>
          <h2>Total Balance Across Updates</h2>
          <p>₹{totalBalance}</p>
        </div>
      )}
    </div>
  );
}

export default App;
