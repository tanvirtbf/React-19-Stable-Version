import React, { useState } from "react";
import "./App.css";

function App() {

  return (
    ``
  );
}

function Form(){
  const [color, setColor] = useState("")

  return(
    <input style={{backgroundColor: color}} type="text" value={color} onChange={(e) => setColor(e.target.value)} />
  )
}

function Child() {
  console.log('Child component rendered');

  return (
    <div>
      <h1>Child</h1>
    </div>
  );
}

export default App;
