import { useEffect, useState } from "react";
import "./App.css";
import TestUseEffect from "./components/TestUseEffect";

function App() {
  const [count, setCount] = useState(0)

  const [obj, setObj] = useState({
    name : 'Tanvir',
    age : 25, 
    roll : 1,
  })

  if(count % 3 === 0) obj.roll = count

  useEffect(()=>{
    console.log('hello')
  }, [obj])

  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  );
}

export default App;
