import { useEffect, useState } from "react";
import "./App.css";
import Parent from "./components/Parent";

let firstTimeCall = true

function App() {
  const [count, setCount] = useState(0)

  function getData(){
    console.log('Get Data!');
  }

  function handleIncrease(){
    setCount(count+1)
    setCount(count+10)
    setCount(count+1)
    // setCount((prev) => prev+10)
    // setCount((prev) => prev+10)
    setCount(count+1)
    console.log(count);
  }

  const controller = new AbortController();
  const signal = controller.signal;
  fetch("gnasdg", {signal: signal})

  useEffect(() => {

    if(firstTimeCall){
      getData();
    }
    return () => {
      signal.aborted();
    }
  }, [])

  const mod2 = count%2 === 0

  return (
    <div>
      {/* {mod2 && <Parent />} */}
      <button onClick={handleIncrease}>Increase {count}</button>
    </div>
  );
}


export default App;
