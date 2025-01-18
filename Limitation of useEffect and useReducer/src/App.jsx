import { useState } from "react";
import "./App.css";

function App() {
  console.log('App Render!')
  const [count, setCount] = useState(0)
  const [msg, setMessage] = useState('No Message!')

  function handleClick(){
    const newCount = count + 1
    setCount(count+1)
    if(newCount===3){
      setMessage('Hello World!')
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me {count}</button>
      <div>{msg}</div>
    </div>
  );
}

export default App;
