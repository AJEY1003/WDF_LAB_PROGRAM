import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function login() {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!name || !password) {
            alert("Please enter both name and password");
            return;
        }

        if (storedUser && storedUser.name === name && storedUser.password === password) {
            navigate("/dashboard");
        } else {
            alert("Invalid Credentials. Please sign in first.");
        }
    }

    return (
        <div>
            <label>Name:</label><br />
            <input type="text" onChange={(e) => setName(e.target.value)} /><br />
            <label>Password:</label><br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Home;
