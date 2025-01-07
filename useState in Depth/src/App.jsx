import { useRef, useState } from "react";
import "./App.css";

function App() {


  return (
    <>
      <div>
        <input type="text" id="num1" />
        <input type="text" id="num2" />
        <button onClick={handleClick}>ADD</button>
      </div>
      <h1>{value}</h1>
    </>
  );
}

export default App;
