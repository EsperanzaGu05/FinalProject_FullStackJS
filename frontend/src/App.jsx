import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const callBackend = async () => {
    try {
      const url = "http://localhost:3000/tickets?echo=" + name;
      const response = await fetch(url);
      const data = await response.json();
      console.log("RESPUESTA: ", data);
    } catch (error) {
      console.log("ERROR LOADING BACKEND: ", error);
    }
  };

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>FSDM - Frontend - Tickets app</h1>
      <div className="card">
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={() => callBackend()}>Echo backend</button>
      </div>
    </>
  );
}

export default App;
