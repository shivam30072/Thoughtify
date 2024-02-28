import React, { FC } from "react";

const Login = () => {
  async function googleSignIn() {
    window.open("http://localhost:5000/auth/google", "_self");
  }
  return (
    <div>
      <h1>login</h1>
      <button onClick={googleSignIn}>google sign in</button>
    </div>
  );
};

export default Login;
