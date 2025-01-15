import { useState } from "react";
import "./App.css";
import TestUseEffect from "./components/TestUseEffect";

function App() {
  const [count, setCount] = useState(0)
  function xyz(){
    console.log('Hiii')
  }
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  );
}

export default App;
