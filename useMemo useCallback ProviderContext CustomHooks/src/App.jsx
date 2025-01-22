import { useReducer, useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App(){
  const [count, setCount] = useState(0)

  function handleClick(e){
    setCount(count+1)
  }

  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
      {count>4 && count<10 && <Child />}
    </div>
  );
}

export default App;
















