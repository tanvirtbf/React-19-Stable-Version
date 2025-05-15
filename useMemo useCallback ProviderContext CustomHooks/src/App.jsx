import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  function handleClick(){
    setCount(count+1)
    countRef.current = count+1
  }

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCount(countRef.current+3)
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
}

export default App;



