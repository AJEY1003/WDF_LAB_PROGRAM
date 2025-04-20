import React, { useState } from "react";

function App() {
  const [banks, setBanks] = useState([
    { name: "SBI", Balance: 100, Location: "Chennai" },
    { name: "ICICI", Balance: 2000, Location: "Mumbai" },
    { name: "AXIS", Balance: 3000, Location: "Delhi" },
  ]);

  const [bank, setBank] = useState({ name: "", Balance: 0, Location: "" });

  const [filter, setFilter] = useState([]); 

  function AddBank() {
    setBanks([...banks, { ...bank, Balance: parseFloat(bank.Balance) }]);
    setBank({ name: "", Balance: 0, Location: "" });
    setFilter([]); // Reset filter on add
  }

  function DeleteBank(index) {
    const updatedBanks = [...banks];
    updatedBanks.splice(index, 1);
    setBanks(updatedBanks);
    setFilter([]); // Reset filter on delete
  }

  function Greaterthantwohundred() {
    const filteredBanks = banks.filter((bank) => bank.Balance > 200);
    setFilter(filteredBanks);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New Bank</h1>

      <label>Name:</label><br />
      <input
        type="text"
        value={bank.name}
        onChange={(e) => setBank({ ...bank, name: e.target.value })}
      /><br /><br />

      <label>Balance:</label><br />
      <input
        type="number"
        value={bank.Balance}
        onChange={(e) => setBank({ ...bank, Balance: e.target.value })}
      /><br /><br />

      <label>Location:</label><br />
      <input
        type="text"
        value={bank.Location}
        onChange={(e) => setBank({ ...bank, Location: e.target.value })}
      /><br /><br />

      <button onClick={AddBank}>Add Bank</button>
      <button onClick={Greaterthantwohundred}>Show Balance  200</button>

      {filter.length > 0 && (
        <>
          <h2>Filtered Banks</h2>
          <ul>
            {filter.map((b, index) => (
              <li key={index}>
                <strong>{b.name}</strong> - ₹{b.Balance} ({b.Location})
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>All Banks</h2>
      <ul>
        {banks.map((b, index) => (
          <li key={index}>
            <strong>{b.name}</strong> - ₹{b.Balance} ({b.Location}){" "}
            <button onClick={() => DeleteBank(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

