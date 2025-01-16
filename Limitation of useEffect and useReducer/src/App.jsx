import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  const arr = []

  useEffect(()=>{
    console.log('hello')
  }, [arr.length])

  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Click Me {count}</button>
    </div>
  );
}

export default App;
