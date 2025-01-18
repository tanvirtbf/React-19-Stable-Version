import { useEffect, useState } from "react";
import "./App.css";

function App() {
  console.log('App Render!')
  const [count, setCount] = useState(0)
  const [msg, setMessage] = useState('No Message!')

  useEffect(()=>{
    if(count === 2) {
      setMessage("Hello World!")
    }
  }, [count])

  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Click Me {count}</button>
      <div>{msg}</div>
    </div>
  );
}

export default App;
