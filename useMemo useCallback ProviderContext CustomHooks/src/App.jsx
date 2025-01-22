import { useReducer, useState } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0)

  function handleClick(e){
    setCount(count+1)
  }

  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
}

export default App;
















