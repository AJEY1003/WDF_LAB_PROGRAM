import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function signUp() {
        if (!name || !password) {
            alert('Please enter both name and password');
            return;
        }

        localStorage.setItem('user', JSON.stringify({ name, password }));
        alert("Sign in successful!");
        navigate("/");
    }

    return (
        <div>
            <label>Name:</label><br />
            <input type="text" onChange={(e) => setName(e.target.value)} /><br />
            <label>Password:</label><br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <button onClick={signUp}>Sign In</button>
        </div>
    );
}

export default Signin;
