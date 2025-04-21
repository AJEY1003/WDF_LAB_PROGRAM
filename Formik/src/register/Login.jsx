import React from "react";
const Login = () => {
    return (
      <div>
        <h2>Login Page</h2>
        <form>
          <div>
            <label>Email Address</label>
            <input type="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  