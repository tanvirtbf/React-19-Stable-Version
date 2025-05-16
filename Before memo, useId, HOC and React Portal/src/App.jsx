import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <Form>
      <Child />
    </Form>
  );
}

function Form({ children }) {
  const [color, setColor] = useState("");

  return (
    <div style={{ backgroundColor: color }}>
      <input
        style={{ backgroundColor: color }}
        type="text"
        value={color}
        onInput={(e) => setColor(e.target.value)}
      />
      {children}
    </div>
  );
}

function Child() {
  console.log("Rendering Child");
  return (
    <div>
      <h1>Child</h1>
    </div>
  );
}

export default App;
