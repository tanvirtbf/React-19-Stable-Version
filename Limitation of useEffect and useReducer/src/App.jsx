import { useState } from "react";
import "./App.css";
import TestUseEffect from "./components/TestUseEffect";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Unmount {count}</button>
      {count%2===0 ? '' : <TestUseEffect />}
    </div>
  );
}

export default App;
