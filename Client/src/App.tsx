import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  async function googleSignIn() {
    window.open("http://localhost:5000/auth/google", "_self");
  }
  return (
    <div>
      <h1>homepage</h1>
      <button onClick={googleSignIn}>google sign in</button>
    </div>
  );
}

export default App;
