import React from 'react';

function AccountDetails() {
  const obj = {
    name: "Cheran",
    balance: 10000,
    accountno: 1234,
    accountType: "Savings",
    dateofcreation: "01-01-2022",
    bankName: "ICICI",
    panCardNumber: "ABCD1234",
  };

  return (
    <div>
      <h1>Account Details</h1>
      <h2>{obj.name}</h2>
      <br />
      <ul>
        {Object.entries(obj).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
))}
      </ul>
      <p>Balance of the account number {obj.accountno} is {obj.balance}</p>
    </div>
  );
}

export default AccountDetails;
