import React, { memo, useEffect, useRef, useState } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState("")
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
      <MemoizedChild msg={msg} />
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
}

function Child(){
  console.log('Child Component run!');
  return <h1>Hello Child!</h1>
}

const MemoizedChild = memo(Child)

export default App;



