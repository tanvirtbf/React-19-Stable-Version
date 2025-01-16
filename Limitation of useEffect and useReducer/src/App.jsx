import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  const [obj, setObj] = useState({name : 'Tanvir'})

  useEffect(()=>{
    console.log('hello')
  }, [obj])

  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Click Me {count}</button>
    </div>
  );
}

export default App;
