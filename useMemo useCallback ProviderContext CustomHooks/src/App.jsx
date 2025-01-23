import { useState } from "react";
import "./App.css";
import TestMemo from "./components/TestMemo";

function App(){
  const [count, setCount] = useState(0)

  function handleClick(e){
    setCount(count+1)
  }

  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
      <TestMemo />
    </div>
  );
}

export default App;

