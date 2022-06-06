import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  return (
    <div >
      <p>Login</p>
      <input data-cy="login-email" placeholder="Enter email"/><br/>
      <input data-cy="login-password" placeholder="Enter password" /> <br/>
      <button data-cy="login-submit"  >Login</button>
      
    </div>
    
  );
};

export default Login;
