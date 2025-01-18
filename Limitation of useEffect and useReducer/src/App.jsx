import { useState } from "react";
import "./App.css";

function App() {
  console.log('App Render!')
  const [count, setCount] = useState(0)

  const msg = count%2==0 ? 'Yes' : 'No'

  function handleClick(){
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me {count}</button>
      <div>{msg}</div>
    </div>
  );
}

export default App;
